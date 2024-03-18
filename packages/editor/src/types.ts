import type { editor } from 'monaco-editor';
import type MonacoEditor from '@monaco-editor/react';
import { EditorLanguage } from 'monaco-editor/esm/metadata';



export type IEditor = editor.IStandaloneCodeEditor
export type EditorOptions = editor.IStandaloneEditorConstructionOptions


export type MonacoProps = React.ComponentProps<typeof MonacoEditor>


export type MonacoPageParams = {
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
    sideBySide = "side-by-side"
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


