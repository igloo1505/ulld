import React from 'react'
import { MdxLivePreviewPanel } from '../../../mdxContent/mdxPreviewPanel';
import { EditorWithPreview, EditorWithPreviewProps } from '../../editorWithPreview/editorWithPreview';



interface MdxEditorWithPreviewProps extends Omit<EditorWithPreviewProps, "language"> {
    
}


export const MdxEditorWithPreview = (props: MdxEditorWithPreviewProps) => {
return (
        <EditorWithPreview 
            {...props}
            language="mdx"
            displayPanel={MdxLivePreviewPanel}
        />
)
}


MdxEditorWithPreview.displayName = "MdxEditorWithPreview"
