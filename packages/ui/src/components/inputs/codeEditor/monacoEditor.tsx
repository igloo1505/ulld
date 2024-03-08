"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const MonacoEditor = dynamic(() => import('react-monaco-editor'), { ssr: false })
import { EditorLanguage } from 'monaco-editor/esm/metadata';
import "./monacoEditor.scss"
type MonacoProps = React.ComponentProps<typeof MonacoEditor>

export enum MonacoEditorSupportedLanguage {
    typescript = "typescript",
    python = "python",
    markdown = "markdown",
    json = "json",
}


export interface FullCodeEditorTextAreaProps extends MonacoProps {
    value: string
    onChange: (val: string) => void
    darkMode?: boolean
    language?: EditorLanguage
    width?: number | string
    height?: number | string
    asModalChild?: boolean
}

const setupMonacoVim = () => {
    /* NOTE: https://github.com/brijeshb42/monaco-vim */
    /* NOTE: https://codesandbox.io/p/sandbox/monaco-editorvim-jy8ox?file=%2Fsrc%2Findex.js%3A31%2C8 */
    /* window.require.config({ */
    /*   paths: { */
    /*     "monaco-vim": "https://unpkg.com/monaco-vim/dist/monaco-vim" */
    /*   } */
    /* }); */
    /*  window.require(["monaco-vim"], function (MonacoVim) { */
    /*   const statusNode = document.querySelector(".status-node"); */
    /*   MonacoVim.initVimMode(editor, statusNode); */
    /* }); */
}

const FullMonacoEditor = ({ value, onChange, options, darkMode, language = "typescript", width, height, asModalChild, ...props }: FullCodeEditorTextAreaProps) => {
    return (
        <MonacoEditor
            {...props}
            className={"ulldMonacoEditor"}
            width={width || "800"}
            height={height || "600"}
            language={language}
            theme={darkMode !== false ? "vs-dark" : "vs"}
            value={value || ""}
            options={{
                ...(asModalChild && {
                    padding: {
                        top: 24,
                        bottom: 24,
                        ...options?.padding
                    }
                }),
                ...options
            }}
            onChange={onChange}
            editorDidMount={() => {
                console.log(`Monaco Editor has mounted that mothafucka...`)
            }}
        />
    )
}


FullMonacoEditor.displayName = "FullMonacoEditor"


export default FullMonacoEditor;
