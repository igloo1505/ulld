import { MDXSerializeReturnType } from '@ulld/parsers';
import React from 'react'


interface ParsedMdxContent {
    compiledSource: string;
    scope: Record<string, any>;
    frontmatter: Record<string, string>;
    original: string;
}


export interface MdxContentSERVERProps {
    content: string | ParsedMdxContent | MDXSerializeReturnType
    inline?: boolean
    parentId?: string
    className?: string
}

export const MdxContentSERVER = (props: MdxContentSERVERProps) => {
    return (
        <div></div>
    )
}


MdxContentSERVER.displayName = "MdxContentSERVER"


