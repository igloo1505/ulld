import { getInternalConfig } from '#/lib/config/zod/getInternalConfig'
import clsx from 'clsx'
import React from 'react'


const BlockQuote = (props: React.HTMLAttributes<HTMLQuoteElement>) => {
    const internalConfig = getInternalConfig()
    return (
        <blockquote {...props} className={clsx("mt-6 border-l-[4px] border-l-primary pl-2", internalConfig.UI.text?.blockQuoteItalic && "italic")} />
    )
}


BlockQuote.displayName = "BlockQuote"


export default BlockQuote;
