import React from 'react'
import RelativeTimeDisplay from './relativeTimeDisplay'
import clsx from 'clsx'
import { H3 } from '@ulld/embeddable-components/heading'
import { TimeDisplayType } from '@ulld/configschema/zod/dateParseConfig'
import { AppConfigSchemaOutput } from '@ulld/configschema/types'
import { readAppConfig } from '@ulld/developer/readAppConfig'



interface CountdownProps {
    at: string
    label?: string | React.ReactNode
    block?: boolean
    summarize?: boolean
    summary?: boolean
    analog?: boolean
    descriptive?: boolean
    right?: boolean
    config?: AppConfigSchemaOutput
}


const Countdown = async ({ at, right, block, label, summary, summarize, analog, descriptive, config: _config }: CountdownProps) => {
    let config = _config || await readAppConfig()
    let type: TimeDisplayType = Boolean(summary || summarize) ? "summarized" : analog ? "analog" : descriptive ? "descriptive" : config.dateHandling.defaultTimeDisplayType
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
