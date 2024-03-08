"use client"
import { DateTime } from '#/classes/data/dateTime'
import { TimeDisplayType } from '#/lib/config/zod/dateParseConfig'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'




interface RelativeTimeDisplayProps {
    time: string | Date
    className?: string
    display: TimeDisplayType
}

const RelativeTimeDisplay = ({ time, className, display }: RelativeTimeDisplayProps) => {
    const [displayString, setDisplayString] = useState("")
    useEffect(() => {
        let t = new DateTime(time)
        t.flat = true
        setDisplayString(t.relativeTime(display))
        let interval = t.updateOnInterval(1, display, (s: string) => setDisplayString(s))
        return () => clearInterval(interval)
    }, [time])
    return (
        <div className={clsx("px-4 py-3", className && className)}>
            {displayString}
        </div>
    )
}


RelativeTimeDisplay.displayName = "RelativeTimeDisplay"


export default RelativeTimeDisplay;
