"use client"
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { getComponentMap } from '../markdown/componentMap'
import { MDXSerializeReturnType } from '@ulld/parsers'



interface CompiledMdxContainerProps {
    content: MDXSerializeReturnType
}

const CompiledMdxContainer = ({ content }: CompiledMdxContainerProps) => {
    return (
        <MDXRemote
            {...content as (MDXSerializeReturnType & { frontmatter: Record<string, string> })}
            components={getComponentMap(content.compiledSource, {
                all: false,
                noMermaid: true
            })}
        />
    )
}


CompiledMdxContainer.displayName = "CompiledMdxContainer"


export default CompiledMdxContainer;
