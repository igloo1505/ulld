"use client"
import { Badge } from '@ulld/tailwind/base'
import clsx from 'clsx'
import React from 'react'



interface AutocompleteIndicatorContainerProps {
    value: string
    values: string[]
    completeOptions: string[]
    completeIndex: number
    selectOption: (s: string) => void
}

interface CompleteOptProps {
    index: number
    activeIndex: number
    value: string
    hide: boolean
    selectOption: (s: string) => void
}


const CompleteOption = ({ index, value, activeIndex, selectOption, hide }: CompleteOptProps) => {
    return (
        <Badge
            variant={index === activeIndex ? "secondary" : "outline"}
            className={clsx("cursor-pointer", hide && "hidden")}
            onClick={() => selectOption(value)}
        >{value}</Badge>
    )
}

const AutocompleteIndicatorContainer = ({ value, selectOption, values, completeOptions, completeIndex }: AutocompleteIndicatorContainerProps) => {
    return (
        <div className={"w-full my-3 h-6 flex flex-row justify-start items-center gap-2 md:gap-3 text-sm overflow-hidden flex-nowrap"}>
            {completeOptions.map((c, i) => {
                return <CompleteOption
                    index={i}
                    activeIndex={completeIndex}
                    selectOption={selectOption}
                    hide={value === "" || values.includes(c)}
                    value={c}
                    key={`complete-opt-${i}`}
                />
            })}
        </div>
    )
}


AutocompleteIndicatorContainer.displayName = "AutocompleteIndicatorContainer"


export default AutocompleteIndicatorContainer;
