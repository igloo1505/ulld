import React from 'react'
import { EditorWithPreview, EditorWithPreviewProps } from '../../editorWithPreview/editorWithPreview';
import { MdxLivePreviewPanel } from "@ulld/render/mdxPreviewPanel";


interface LatexEditorWithPreviewProps extends Omit<EditorWithPreviewProps, "language"> {
    
}


export const LatexEditorWithPreview = ({...props}: LatexEditorWithPreviewProps) => { 
    return (
        <EditorWithPreview 
            {...props}
            language="latex"
            displayPanel={(p) => <MdxLivePreviewPanel {...p} center/>}
        />
    )
}


LatexEditorWithPreview.displayName = "LatexEditorWithPreview"
