"use client"
import React, {useState, useEffect} from 'react'
import { useLocalStorage } from '@ulld/hooks/useLocalStorage';
import {useRouter, useSearchParams} from "next/navigation"
import dynamic from 'next/dynamic'
import "@uiw/react-textarea-code-editor/dist.css";
import { getEditorUrl } from './utilityFunctions';

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

interface TextAreaCodeEditorProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
    value?: string
    onChange?: (v: string) => void
    language?: string
    localStorageKey: string
    themes?: {
        light: string
        dark: string
    },
    initializeLocalStorage?: boolean
}


export const TextAreaCodeEditor = ({value="", onChange, initializeLocalStorage=true, localStorageKey, language, themes={
    dark: "dracula",
    light: "material-theme-lighter"
}, ...props}: TextAreaCodeEditorProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [internalLanguage, setInternalLanguage] = useState(language || "python")
    const [internalValue, setInternalValue] = useLocalStorage(localStorageKey, value, {
        initializeWithValue: initializeLocalStorage 
    })
    useEffect(() => {
        let l = searchParams.get("language")
        if(l){
            setInternalLanguage(l)
        }
        
    }, [searchParams])

    const handleChange = (val: string) => {
         setInternalValue(val)
        }

    const toEditor = () => {
                                router.push(getEditorUrl(localStorageKey, internalLanguage))

        }

return (
    <CodeEditor
      {...props}
      value={internalValue}
      language={internalLanguage || "python"}
      onChange={(e) => handleChange(e.target.value)}
      padding={15}
      onDoubleClick={toEditor}
      onKeyDown={(e) => {
                if(e.key === "Enter" && e.shiftKey && e.metaKey){
                    e.preventDefault()
                    e.stopPropagation()
                    toEditor()
                    return false
                }  
            }}
      style={{
        ...props.style,
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
)
}


TextAreaCodeEditor.displayName = "TextAreaCodeEditor"
