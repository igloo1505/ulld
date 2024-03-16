import type { editor } from 'monaco-editor';
import type MonacoEditor from '@monaco-editor/react';



export type IEditor = editor.IStandaloneCodeEditor
export type EditorOptions = editor.IStandaloneEditorConstructionOptions


export type MonacoProps = React.ComponentProps<typeof MonacoEditor>


declare global {
    interface Window {
        vimMode: any;
        require: {
            config: (vals: { paths: Record<string, string> }) => void
        }
    }
}
