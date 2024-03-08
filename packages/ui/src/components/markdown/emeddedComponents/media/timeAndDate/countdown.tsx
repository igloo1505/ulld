import React from 'react'
import RelativeTimeDisplay from './relativeTimeDisplay'
import clsx from 'clsx'
import { H3 } from '#/components/markdown/text/heading'
import { getInternalConfig } from '#/lib/config/zod/getInternalConfig'
import { TimeDisplayType } from '#/lib/config/zod/dateParseConfig'



interface CountdownProps {
    at: string
    label?: string | React.ReactNode
    block?: boolean
    summarize?: boolean
    summary?: boolean
    analog?: boolean
    descriptive?: boolean
    right?: boolean
}


const Countdown = ({ at, right, block, label, summary, summarize, analog, descriptive }: CountdownProps) => {
    let type: TimeDisplayType = Boolean(summary || summarize) ? "summarized" : analog ? "analog" : descriptive ? "descriptive" : getInternalConfig().dateHandling.defaultTimeDisplayType
    return (
        <div className={clsx("flex flex-col justify-center bg-card border rounded-md m-4 w-fit", block ? "justify-center block" : "items-start inline-block", right ? "float-right" : "float-left")}>
            <H3 className={"px-4 py-2 border-b w-full"}>{label}</H3>
            <RelativeTimeDisplay
                time={at}
                display={type}
            />
        </div>
    )
}


Countdown.displayName = "Countdown"


export default Countdown;
