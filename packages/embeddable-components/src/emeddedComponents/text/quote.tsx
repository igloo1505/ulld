import React from 'react'
import { QuoteProps } from './quoteProps'


export const Quote = ({ children, author, by, from }: QuoteProps) => {
    const _author = author || by || from
    return (
        <div className={"w-full flex flex-col justify-center items-center !my-6"}>
            <div className={"w-fit max-w-[83vw] mdlg:max-w-screen-md h-fit flex flex-col gap-3 justify-center items-center bg-secondary/20 text-secondary-foreground rounded-lg p-5 border"}>
                <blockquote
                    className={"italic text-lg w-full text-center !m-0 !px-0 [&_p]:!my-0 !border-none"}
                    style={{
                        borderInlineStart: "none !important",
                        borderInlineStartWidth: "0px",
                        border: "none !important"
                    }}
                >{children}</blockquote>
                {_author && <div className={"w-full text-end px-3 text-sm font-thin dark:text-secondary-foreground/70"}>{`~ ${_author}`}</div>}
            </div>
        </div>
    )
}


Quote.displayName = "Quote"
