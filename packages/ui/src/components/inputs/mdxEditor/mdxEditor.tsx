import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { MDXEditorMethods } from '@mdxeditor/editor'
const MdxEditorInternal = dynamic(() => import("./mdxEditorINTERNAL"))



interface MdxEditorProps {
    content: string
    onChange: (newContent: string) => void
}


const MdxEditor = ({ content, onChange }: MdxEditorProps) => {
    const ref = useRef<MDXEditorMethods>(null!)
    return (
        <MdxEditorInternal
            markdown={content}
            editorRef={ref}
        />
    )
}


MdxEditor.displayName = "MdxEditor"


export default MdxEditor;
