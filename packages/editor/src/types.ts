import type { editor } from 'monaco-editor';
import type MonacoEditor from '@monaco-editor/react';
import { EditorLanguage as MonacoEditorLanguage } from 'monaco-editor/esm/metadata';
export type EditorLanguage = MonacoEditorLanguage | "latex"
export type IEditor = editor.IStandaloneCodeEditor
export type EditorOptions = editor.IStandaloneEditorConstructionOptions
export type * from "@prisma/client"

export type MonacoProps = React.ComponentProps<typeof MonacoEditor>


export type MonacoPageParams = {
    isModal?: boolean
    params: {
        uniqueContentId: string
    }
    searchParams: {
        useExistingValue?: string
        language?: EditorLanguage
    }
}

export enum EditorLayout {
    modal = "modal",
    fullSizeModal = "full-size-modal",
    sideBySide = "side-by-side",
    modalPageFailedIntercept = "modalPageFailedIntercept"
}


declare global {
    interface Window {
        vimMode: any;
        require: {
            config: (vals: { paths: Record<string, string> }) => void
        };
        editor: editor.IStandaloneCodeEditor
    }
}


