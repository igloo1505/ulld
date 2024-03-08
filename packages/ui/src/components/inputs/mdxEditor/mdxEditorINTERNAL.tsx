import React from 'react'
import type { ForwardedRef } from 'react'
import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    MDXEditor,
    type MDXEditorMethods,
    type MDXEditorProps
} from '@mdxeditor/editor'


interface MdxEditorInternalProps extends MDXEditorProps {
    editorRef: ForwardedRef<MDXEditorMethods> | null
}


const MdxEditorInternal = ({
    editorRef,
    ...props
}: MdxEditorInternalProps) => {
    return (
        <MDXEditor
            plugins={[
                // Example Plugin Usage
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin()
            ]}
            {...props}
            ref={editorRef}
        />
    )
}


MdxEditorInternal.displayName = "MdxEditorInternal"


export default MdxEditorInternal;
