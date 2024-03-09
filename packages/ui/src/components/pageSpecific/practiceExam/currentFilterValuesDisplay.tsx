"use client"
import { CalendarAndDateManager } from '@ulld/api'
import { Badge } from '@ulld/tailwind/base'
import React, { useEffect, useState } from 'react'



interface CurrentFilterValuesDisplayProps {
    values: string[]
    removeItem: (s: string) => void
    timeLimit: number
}

const CurrentFilterValuesDisplay = ({ values, removeItem, timeLimit }: CurrentFilterValuesDisplayProps) => {

    const [timeLimitDisplay, setTimeLimitDisplay] = useState("")

    useEffect(() => {
        let s = CalendarAndDateManager.formattedQuantityToDescriptiveString(CalendarAndDateManager.formatTimeQuantity(timeLimit))
        setTimeLimitDisplay(s)
    }, [timeLimit])

    return (
        <div className={"mt-3 w-full h-full"}>
            <div className={"float-right"}>{timeLimitDisplay}</div>
            <div className={"w-full flex flex-row justify-start items-start flex-wrap gap-2 md:gap-3"}>
                {values.map((v, i) => <Badge
                    className={"cursor-pointer"}
                    key={`filter-value-${i}`}
                    onClick={() => removeItem(v)}
                >{v}</Badge>)}
            </div>
        </div>
    )
}


CurrentFilterValuesDisplay.displayName = "CurrentFilterValuesDisplay"


export default CurrentFilterValuesDisplay;
