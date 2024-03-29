"use client"
import { useDebounceMdxParse } from '@ulld/hooks/useDebounceMdxParse'
import { ParseMdxStringInput } from '@ulld/utilities/schemas/mdx/parseMdxStringSchema'
import React, { useEffect } from 'react'



interface MdxStringDisplayClientProps extends ParseMdxStringInput {
    debounceTimeout?: number
    className?: string
}

const MdxStringDisplayClient = ({content, debounceTimeout, className, ...props}: MdxStringDisplayClientProps) => {
    const {value, setValue, Component} = useDebounceMdxParse(
        content,
        debounceTimeout || 500,
        props
    )
    useEffect(() => {
        setValue(content)
    }, [content])

return (
    <Component 
            className={className}
        />
)
}


MdxStringDisplayClient.displayName = "MdxStringDisplayClient"


export default MdxStringDisplayClient;
