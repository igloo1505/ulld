import { MDXProvider } from "@mdx-js/react"
import React from 'react'
import { getComponentMap } from "../markdown/componentMap"



interface MdxProviderProps {
    content?: string
    children: React.ReactNode
    all?: boolean
    requiredOnly?: boolean
}

const MdxProvider = ({ content, children, all, requiredOnly }: MdxProviderProps) => {
    return (
        <MDXProvider components={getComponentMap(content || "", {
            all,
            requiredOnly: Boolean(!all && !content) || requiredOnly
        })}>{children}</MDXProvider>
    )
}


MdxProvider.displayName = "MdxProvider"


export default MdxProvider;
