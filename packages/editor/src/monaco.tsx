"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })
import type { EditorLanguage } from 'monaco-editor/esm/metadata';
import "./styles.scss"
import type { Monaco } from '@monaco-editor/react';
import clsx from 'clsx';
import { z } from 'zod'
import { MonacoProps, IEditor, EditorOptions } from './types';
import MonacoVimStatusBar from './statusBar';
import CodeEditorLanguageSelect from './languageSelect';

export enum MonacoEditorSupportedLanguage {
    typescript = "typescript",
    python = "python",
    markdown = "markdown",
    json = "json",
}

type Accept<T extends string> = {
    onAccept: (val: T) => void
    onChange?: never
}

type Change<T extends string> = {
    onChange: (val: T) => void
    onAccept?: never
}

export enum EditorLayout {
    modal = "modal",
    fullSizeModal = "full-size-modal",
    sideBySide = "side-by-side"
}
export type CodeEditorProps<T extends string, J extends EditorLayout> = {
    value?: T
    darkMode?: boolean
    language?: EditorLanguage | "select"
    asModalChild?: boolean
    layout?: J
    uniqueContentId: J extends "modal" ? string : never
} & Omit<MonacoProps, "onChange" | "initialValue"> & (Accept<T> | Change<T>)




/* export type CodeEditorProps<T extends string> = P<T> & (Accept<T> | Change<T>) */


export type CodeEditorActionRunFunction = Parameters<IEditor["addAction"]>[0]

const codeEditorActionSchema = z.object({
    id: z.string().describe("A *unique* id for this action to be used internally."),
    label: z.string().describe("Label that will be displayed to within the editor."),
    precondition: z.string().optional(),
    keybindings: z.number().array().optional().describe("Use the monaco.KeyMod and monaco.KeyCode enum to populate these numbers for reliability."),
    keybindingContext: z.string().optional(),
    contextMenuGroupId: z.string().optional(),
    contextMenuOrder: z.number().optional(),
    run: z.function().args(z.any().describe("ICodeEditor")).returns(z.void())
})

export const codeEditorSettingsSchema = z.object({
    actions: codeEditorActionSchema.array().default([])
})


interface MonacoSetupProps<T extends string, J extends EditorLayout> {
    isModal: boolean,
    onAccept: NonNullable<CodeEditorProps<T, J>["onAccept"] | CodeEditorProps<T, J>["onChange"]>,
    statusBarId: string
}

const setupMonacoVim = <T extends string, J extends EditorLayout>(_editor: IEditor, monaco: Monaco, opts: MonacoSetupProps<T, J>) => {
    _editor.addAction({
        // an unique identifier of the contributed action
        id: "submit-monaco-modal",
        // a label of the action that will be presented to the user
        label: "Submit Monaco Modal",
        keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Enter
        ],
        // the method that will be executed when the action is triggered.
        run: function(editorState) {
            opts.onAccept(editorState.getValue() as T)
        }
    })

    _editor.addAction({
        id: "to-normal-mode",
        label: "Normal Mode",
        keybindings: [
            monaco.KeyMod.chord(
                monaco.KeyCode.KeyJ,
                monaco.KeyCode.KeyJ
            )
        ],
        run: (editorState) => {
            /* window?.vimMode?.enterVimMode("visual") */
        }
    })

    window.require.config({
        paths: {
            "monaco-vim": "/editor/monaco-vim.js"
        }
    });

    let vm: { dispose: () => void } | null = null
    /// @ts-ignore
    window.require(["monaco-vim"], function(MonacoVim) {
        const statusNode = document.getElementById(opts.statusBarId);
        const vimMode = MonacoVim.initVimMode(_editor, statusNode);
        vm = vimMode
        window.vimMode = vimMode
        /* window.editor = _editor */
    });
    return () => vm?.dispose()
}

const universalOpts: EditorOptions = {
    wordWrap: "on",
    inlineSuggest: {
        /* showToolbar: "always", */
        /* enabled: true, */
    },
    inlayHints: {
        fontSize: 10,
    },
    suggest: {
        shareSuggestSelections: true,
        selectionMode: "whenQuickSuggestion",
    },
    acceptSuggestionOnEnter: "smart",
    acceptSuggestionOnCommitCharacter: false,
    tabCompletion: "on",
}




const CodeEditor = <T extends string, J extends EditorLayout>({ value, onChange, onAccept, options, darkMode, language = "select", width, height, asModalChild, layout, ...props }: CodeEditorProps<T, J>) => {

    const baseOptions: Record<EditorLayout, EditorOptions> = {
        modal: {
            ...universalOpts,
            minimap: {
                enabled: false
            },
            padding: {
                top: 24,
                bottom: 24,
            }
        },
        "full-size-modal": {
        },
        "side-by-side": {
        }
    }
    const statusBarId = "ulld-monaco-vim-status"
    const [internalValue, setInternalValue] = useState(value || "")
    const [internalLanguage, setInternalLanguage] = useState(language === "select" ? "python" : language)
    const handleChange = (val: string | undefined) => {
        onChange ? onChange(val as T || "" as T) : setInternalValue(val || "")
    }
    const opts = baseOptions[layout ? layout : EditorLayout.modal]

    return (
        <div className={"w-fit h-fit flex flex-col justify-center items-end gap-4"}>
            <CodeEditorLanguageSelect
                value={internalLanguage}
                onChange={setInternalLanguage}
            />
            <div className={clsx(
                "w-fit h-fit flex flex-col justify-center items-center p-0",
                layout === "modal" && "[&>section]:w-[min(768px,85vw)] [&>section]:h-[min(640px,70vh)]"
            )}>
                <MonacoEditor
                    {...props}
                    className={"ulldMonacoEditor"}
                    width={width || "800"}
                    height={height || "600"}
                    language={internalLanguage}
                    theme={darkMode !== false ? "vs-dark" : "light"}
                    value={Boolean(value && onChange) ? value : internalValue}
                    options={{
                        ...opts,
                        ...options
                    }}
                    onChange={handleChange}
                    onMount={(...args) => setupMonacoVim(...args, { onAccept: onAccept || handleChange, statusBarId, isModal: Boolean(layout === "modal" || onAccept) })}
                />
                <MonacoVimStatusBar
                    id={statusBarId}
                />
            </div>
        </div>
    )
}


CodeEditor.displayName = "FullMonacoEditor"


export default CodeEditor;
