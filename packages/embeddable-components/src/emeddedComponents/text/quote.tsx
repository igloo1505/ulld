import React from 'react'
import { QuoteProps } from './quoteProps'
import cn from '@ulld/utilities/cn'


export const Quote = ({ children, author, by, from, small, textBase, align = "center", authorPos = "right" }: QuoteProps) => {
    const _author = author || by || from
    return (
        <div className={cn("w-full flex flex-col justify-center items-center !my-6")}>
            <div className={"w-fit max-w-[83vw] mdlg:max-w-screen-md h-fit flex flex-col gap-3 justify-center items-center bg-secondary/20 text-secondary-foreground rounded-lg p-5 border"}>
                <blockquote
                    className={cn("italic w-full !m-0 !px-0 [&_p]:!my-0 !border-none", small ? "text-sm" : textBase ? "text-base" : "text-lg", align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center")}
                    style={{
                        borderInlineStart: "none !important",
                        borderInlineStartWidth: "0px",
                        border: "none !important"
                    }}
                >{children}</blockquote>
                {_author && <div className={cn("w-full px-3 text-sm font-thin dark:text-secondary-foreground/70", authorPos === "left" ? "text-left" : authorPos === "right" ? "text-right" : "text-center")}>{`~ ${_author}`}</div>}
            </div>
        </div>
    )
}


Quote.displayName = "Quote"
