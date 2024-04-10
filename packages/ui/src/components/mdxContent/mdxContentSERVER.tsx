import { autoWrapMath } from '@ulld/utilities/latexUtils';
import React from 'react'


// Removed on 4-9-24. Add back in as content: string | ParsedMdxContent if needed, depending on new parser output.
interface ParsedMdxContent {
    compiledSource: string;
    scope: Record<string, any>;
    frontmatter: Record<string, string>;
    original: string;
}


export interface MdxContentSERVERProps {
    content: string
    inline?: boolean
    parentId?: string
    className?: string
    isMathOnly?: boolean
    autoWrap?: boolean
    display?: boolean
    small?: boolean
}


const parseProps = (p: MdxContentSERVERProps) => {
    let inline = p.display === true ? false : true
    return {
        displayType: inline ? "inline" : "display",
        content: p.autoWrap ? autoWrapMath(p.content, !inline) : p.content
    }
}

export const MdxContentSERVER = (props: MdxContentSERVERProps) => {
    return (
        <div></div>
    )
}


MdxContentSERVER.displayName = "MdxContentSERVER"


