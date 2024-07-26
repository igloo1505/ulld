import React from 'react'
import { EditorWithPreview, EditorWithPreviewProps } from '../../editorWithPreview/editorWithPreview';
import { MdxLivePreviewPanel } from '@ulld/render/mdxPreviewPanel';



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
