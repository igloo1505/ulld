import React from 'react'
import { Quote } from '@prisma/client';
import clsx from 'clsx';


interface PinnedQuoteProps {
    quote?: Quote | null
    className?: string
}

const PinnedQuote = ({ quote, className }: PinnedQuoteProps) => {
    if (!quote) return null
    return (
        <div className={clsx("w-fit h-fit flex flex-col justify-center px-6 py-4 rounded-lg items-center bg-black bg-opacity-70 text-card-foreground max-w-[calc(100%-4rem)]", className)} id="pinnedQuoteContainer">
            {quote.body.split("\n").map((q, i) => {
                return <div className={"text-gray-200 italic text-xl px-16 text-center font-semibold"} key={`pinned-quote-line-${i}`}>{q}</div>
            })}
            <div className={"w-fit flex flex-row justify-center items-center text-gray-100 gap-2"}>
                <div className={""}>~{quote.author}{quote.source && ","}</div>
                {quote.source && <div className={"italic text-white"}>{quote.source}</div>}
            </div>
        </div>
    )
}


PinnedQuote.displayName = "PinnedQuote"


export default PinnedQuote;
