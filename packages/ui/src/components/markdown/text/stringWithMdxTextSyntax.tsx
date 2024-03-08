import { parseStringWithMdxSyntax } from '#/lib/parsing/parseStringWithMdxSyntax'
import clsx from 'clsx'
import React from 'react'



interface StringWithMdxTextSyntaxProps {
    className?: string
    children: string
}



const StringWithMdxTextSyntax = async ({ className, children }: StringWithMdxTextSyntaxProps) => {
    let _html = await parseStringWithMdxSyntax(children)

    return (
        <span
            className={clsx("", className && className)}
            dangerouslySetInnerHTML={{ __html: _html }}
        />
    )
}


StringWithMdxTextSyntax.displayName = "StringWithMdxTextSyntax"


export default StringWithMdxTextSyntax;
