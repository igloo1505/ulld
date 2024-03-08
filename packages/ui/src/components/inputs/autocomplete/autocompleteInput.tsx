"use client"
import React, { KeyboardEvent, useEffect, useState } from 'react'
import AutocompleteIndicatorContainer from './autocompleteIndicatorContainer'
import { Input } from '@ulld/tailwind/base'
import { onIndexChange } from '@ulld/state'



interface AutocompleteInputProps {
    options: string[]
    value: string
    values: string[]
    onChange: (s: string) => void
    onSelect: (s: string) => void

}

const AutocompleteInput = ({ value, values, onChange, onSelect, options }: AutocompleteInputProps) => {
    const [completeIndex, setCompleteIndex] = useState(0)
    const [completeOptions, setCompleteOptions] = useState<string[]>([])
    useEffect(() => {
        if (value === "") {
            setCompleteIndex(0)
            return setCompleteOptions([])
        }
        let vals = options.filter((f) => new RegExp(value, "gi").test(f))
        setCompleteOptions(vals)
    }, [value])

    const selectOption = (s: string) => {
        onSelect(s)
        onChange("")
        setCompleteIndex(0)
        setCompleteOptions([])
    }

    const handleDir = (e: KeyboardEvent<HTMLInputElement>, dir: 1 | -1 | 0, select: boolean) => {
        if (dir === 0) {
            if (select) {
                onSelect(completeOptions[completeIndex])
                onChange("")
                setCompleteIndex(0)
                setCompleteOptions([])
            }
            return
        }
        if (dir === 1) {
            return setCompleteIndex(completeIndex === completeOptions.length - 1 ? 0 : completeIndex + 1)
        }
        if (dir === -1) {
            return setCompleteIndex(completeIndex === 0 ? completeOptions.length - 1 : completeIndex - 1)
        }
    }

    return (
        <div className={"w-full h-fit"}>
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => onIndexChange(e, handleDir)}
            />
            <AutocompleteIndicatorContainer
                value={value}
                values={values}
                completeOptions={completeOptions}
                completeIndex={completeIndex}
                selectOption={selectOption}
            />
        </div>
    )
}


AutocompleteInput.displayName = "AutocompleteInput"


export default AutocompleteInput;
