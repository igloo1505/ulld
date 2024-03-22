"use client"
import React, { useState, useEffect } from 'react'
import { useLocalStorage } from '@ulld/hooks/useLocalStorage';
import { useRouter, useSearchParams } from "next/navigation"
import dynamic from 'next/dynamic'
import "@uiw/react-textarea-code-editor/dist.css";
import { getEditorUrl } from './utilityFunctions';
import {EditorModalSyncValueOpts} from "@ulld/hooks/useEditorModalSyncedValue"

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export interface TextAreaCodeEditorProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
    value?: string
    onChange?: (v: string) => void
    language?: string
    localStorageKey: string
    themes?: {
        light: string
        dark: string
    },
}


export const TextAreaCodeEditor = ({ value = "", onChange, initialValueSource = "value", localStorageKey, language, themes = {
    dark: "dracula",
    light: "material-theme-lighter"
}, className, ...props }: TextAreaCodeEditorProps & EditorModalSyncValueOpts) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isInitial, setIsInitial] = useState(true)
    const [internalLanguage, setInternalLanguage] = useState(language || "python")
    const [internalValue, setInternalValue] = useLocalStorage(localStorageKey, value, {
        initializeWithValue:  initialValueSource === "storage"
    })

    useEffect(() => {
        if(!isInitial) return
        if(initialValueSource === "storage"){
            console.log(`useInitialLocalStorage`, internalValue)
            onChange && onChange(internalValue)
        } else {
            console.log(`dont useInitialLocalStorage`)
            setInternalValue(value)
        }
        setIsInitial(false)
    }, [])

    useEffect(() => {
        console.log("internalValue: ", internalValue)
       onChange && onChange(internalValue) 
    }, [internalValue])

    useEffect(() => {
        let l = searchParams.get("language")
        if (l) {
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
            className={className}
            onKeyDown={(e) => {
                if (e.key === "Enter" && e.shiftKey && e.metaKey) {
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
