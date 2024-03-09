"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import { TextareaCodeEditorProps } from '@uiw/react-textarea-code-editor';


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);


export interface TextAreaCodeEditorProps<T extends string> {
    value: T | string
    language: string
    onChange: (s: T | string) => void
    placeholder?: string
    editor?: TextareaCodeEditorProps
}

export const TextAreaCodeEditor = <T extends string>({ value, onChange, language = "zsh", editor, placeholder = "" }: TextAreaCodeEditorProps<T>) => {
    const [focused, setFocused] = useState(false)
    const props: TextareaCodeEditorProps = {
        ...editor,
        style: {
            fontSize: 12,
            backgroundColor: focused ? "hsl(var(--muted))" : "hsl(var(--background))",
            fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            borderRadius: focused ? "0" : "var(--radius)",
            transition: "border-radius 0.2s ease-in, background-color 0.2s ease-in",
            ...editor?.style,
        },
        /* prefixCls: "ta-editor-", */
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        padding: 15,
        language,
        value,
        placeholder
    }

    return (
        <CodeEditor
            className={"bg-background border rounded-md focus-visible:rounded-none focus-visible:bg-muted"}
            onChange={(evn) => onChange(evn.target.value)}
            {...props}
            {...(focused && {
                "focus-visible": ""
            })}
        />
    )
}


TextAreaCodeEditor.displayName = "TextAreaCodeEditor"
