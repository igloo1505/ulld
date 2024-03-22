"use client"
import React, { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import "./styles.scss"
import type { Monaco } from '@monaco-editor/react';
import clsx from 'clsx';
import { z } from 'zod'
import { MonacoProps, IEditor, EditorOptions, EditorLayout } from './types';
import MonacoVimStatusBar from './statusBar';
import CodeEditorLanguageSelect from './languageSelect';
import { useLocalStorage } from '@ulld/hooks/useLocalStorage';
import { applyLatexLsp } from './languages/latex';
import {EditorLanguage} from "./types"


const scriptPath = "/scripts/monaco-vim.js"

export enum MonacoEditorSupportedLanguage {
    typescript = "typescript",
    python = "python",
    markdown = "markdown",
    json = "json",
}


export type CodeEditorProps<T extends string, J extends EditorLayout> = {
    value?: T
    darkMode?: boolean
    language?: EditorLanguage | "select"
    asModalChild?: boolean
    layout?: J
    uniqueContentId: J extends "modal" ? string : J extends "modalPageFailedIntercept" ? string : never
    useExisting?: boolean
    onAccept?: (val: T) => void
    onChange?: (val: T) => void
    className?: string
    forceLanguage?: boolean
} & Omit<MonacoProps, "onChange" | "initialValue">




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
    applyLatexLsp(monaco)
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
        id: "cmd-palette",
        label: "Open Editor Command Palette",
        keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP
        ],
        run: (editorState) => {
            const action = editorState.getAction("editor.action.quickCommand")
            action?.run()
        }
    })

    _editor.addAction({
        id: "show-hover-info",
        label: "Show hover info",
        keybindings: [
             monaco.KeyMod.Alt | monaco.KeyCode.KeyK
        ],
        run: (editorState) => {
            console.log(editorState)
            const action = editorState.getAction("editor.action.showHover")
            action?.run()
        }
    })


    window.require.config({
        paths: {
            "monaco-vim": scriptPath
        }
    });
    let vm: { dispose: () => void } | null = null

    /* TODO: Review docs here and rework this to import directly from node_modules or at least from the public directory. Should be pretty easy and add offline functionality. */
    /*     https://github.com/brijeshb42/monaco-vim */

    /// @ts-ignore
    window.require(["monaco-vim"], function(MonacoVim) {
       /* ADD_CONFIG_OPTION: Add ability to set vim mode both from the appConfig and from a search param. Add a config field for key maps if they choose to use vim. */
        MonacoVim.VimMode.Vim.map('jj', '<Esc>', 'insert')
        const statusNode = document.getElementById(opts.statusBarId);
        const vimMode = MonacoVim.initVimMode(_editor, statusNode);
        vm = vimMode
        window.vimMode = vimMode
        window.editor = _editor
        _editor.focus()
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


export const CodeEditor = <T extends string, J extends EditorLayout>({ value:_value, onChange, onAccept, options, darkMode, language = "select", width, height, className, asModalChild, layout, ...props }: CodeEditorProps<T, J>) => {
const [value, setValue] = useLocalStorage(props.uniqueContentId, _value || "", {
        initializeWithValue: !props.useExisting,
    })
    const editorId = "ulld-monaco-editor"
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
        },
        "modalPageFailedIntercept": {
            ...universalOpts,
            minimap: {
                enabled: false
            },
            padding: {
                top: 24,
                bottom: 24,
            }
        },
    }
    const statusBarId = "ulld-monaco-vim-status"
    const [internalLanguage, setInternalLanguage] = useState(language === "select" ? "python" : language)
    const handleChange = (val: string | undefined) => {
        onChange ? onChange(val as T || "" as T) : setValue(val || "")
    }

    const opts = baseOptions[layout ? layout : EditorLayout.modal]

    return (
        <div className={"w-fit h-fit flex flex-col justify-center items-end gap-4"}>
            {Boolean(!props.forceLanguage && language !== "select") && <CodeEditorLanguageSelect
                value={internalLanguage}
                onChange={setInternalLanguage}
            />}
            <div className={clsx(
                "w-fit h-fit flex flex-col justify-center items-center p-0",
                layout === "modal" && "[&>section]:w-[min(768px,85vw)] [&>section]:h-[min(640px,70vh)]"
            )}>
                <MonacoEditor
                    {...props}
                    wrapperProps={{ id: editorId, className, autoFocus: false }}
                    className={"ulldMonacoEditor"}
                    width={width || "800px"}
                    height={height || "600px"}
                    language={internalLanguage}
                    theme={darkMode !== false ? "vs-dark" : "light"}
                    value={Boolean(_value && onChange) ? _value : value}
                    options={{
                        ...opts,
                        ...options
                    }}
                    onChange={handleChange}
                    onMount={(...args) => {
                    setupMonacoVim(...args, { onAccept: onAccept || handleChange, statusBarId, isModal: Boolean(layout === "modal" || onAccept)})
                        if(window?.editor){
                                const em = window.editor.getDomNode()
                                if(em){
                                    em.autofocus = false
                                    em.focus() 
                                }
                            window.editor?.focus()
                        }
                    }}
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
