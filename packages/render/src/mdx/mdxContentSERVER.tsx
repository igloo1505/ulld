import { serverClient } from '@ulld/api/serverClient';
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
    bareAss?: boolean
    content?: string
    inline?: boolean
    parentId?: string
    className?: string
    isMathOnly?: boolean
    autoWrap?: boolean
    display?: boolean
    small?: boolean
    live?: boolean
}


const parseProps = (p: MdxContentSERVERProps) => {
    let inline = p.display === true ? false : true
    return {
        ...p,
        displayType: inline ? "inline" as "inline" : "display" as "display",
        content: !p.content ? "" : p.autoWrap ? autoWrapMath(p.content, !inline) : p.content
    }
}

export const MdxContentSERVER = async (_props: MdxContentSERVERProps) => {
    const props = parseProps(_props)
    const compiled = await serverClient.mdx.parseMdxString({
        content: props.content,
        display: props.displayType
    })  
    return (
        <div></div>
    )
}


MdxContentSERVER.displayName = "MdxContentSERVER"


