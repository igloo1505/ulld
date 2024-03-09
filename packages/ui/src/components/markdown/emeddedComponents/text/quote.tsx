import React from 'react'


interface QuoteProps {
    children: string
    author?: React.ReactNode
    by?: React.ReactNode
    from?: React.ReactNode
}


export const Quote = ({ children, author, by, from }: QuoteProps) => {
    const _author = author || by || from
    return (
        <div className={"w-full flex flex-col justify-center items-center !my-6"}>
            <div className={"w-fit max-w-[83vw] mdlg:max-w-screen-md h-fit flex flex-col gap-3 justify-center items-center bg-secondary/40 text-secondary-foreground rounded-lg p-5 border"}>
                <blockquote className={"italic text-lg w-full text-center"}>{children}</blockquote>
                {_author && <div className={"w-full text-end px-3 text-sm font-thin dark:text-secondary-foreground/70"}>{`~ ${_author}`}</div>}
            </div>
        </div>
    )
}


Quote.displayName = "Quote"
