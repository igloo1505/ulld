"use client"
import clsx from 'clsx'
import React, { useMemo, useState } from 'react'
import CurrentFilterValuesDisplay from './currentFilterValuesDisplay'
import { Button } from '@ulld/tailwind/button'
import { Label } from '@ulld/tailwind/label'
import { Separator } from '@ulld/tailwind/separator'
import { Slider } from '@ulld/tailwind/slider'
import { DynamicIcon } from '../../icons/DynamicIcon'
import AutocompleteInput from '../../inputs/autocomplete/autocompleteInput'
import { PracticeExamSearchParams } from "@ulld/state/formatting/getPracticeExamSearchParams"



interface PracticeExamFilterAndSettingsProps {
    options: string[]
    p: PracticeExamSearchParams
    setRunning: (b: boolean) => void
    setValues: (s: string[]) => void
    values: string[]
    maxTime: number
    timeLimit: number
    setTimeLimit: (s: number) => void
}

const PracticeExamFilterAndSettings = ({ options, setTimeLimit, timeLimit, maxTime, setValues, values, setRunning }: PracticeExamFilterAndSettingsProps) => {
    const [inputValue, setInputValue] = useState("")
    const [open, setOpen] = useState(false)
    const expandIcon = useMemo(() => {
        return <DynamicIcon name="chevrons-up-down" />
    }, [])
    const startPracticeExam = () => {
        setRunning(true)
    }
    const appendValue = (s: string) => {
        if (values.includes(s)) return
        setValues([...values, s])
    }
    const removeItem = (s: string) => {
        setValues(values.filter((v) => v !== s))
    }
    return (
        <div
            data-open={open}
            className={clsx("w-full overflow-hidden h-14 data-[open=true]:h-72 bg-card border border-border rounded-md transition-all duration-300 px-4 pt-0 pb-4 shadow-sm data-[open=true]:shadow-md dark:shadow-none", open && "open")}
        >
            <div
                onClick={() => setOpen(!open)}
                className={"cursor-pointer w-full h-14 text-lg font-semibold flex flex-row justify-between items-center"}
            >
                Filter & Settings
                <div className={"w-6 h-6 float-right"}>
                    {expandIcon}
                </div>
            </div>
            <Separator />
            <div className={"flex mt-3 flex-col-reverse gap-4 md:grid md:grid-cols-[1fr_1fr]"}>
                <div className={"w-full h-fit"}>
                    <div className={"w-full mb-5 h-fit flex flex-col justify-start items-start gap-3"}>
                        <Label
                            htmlFor="qaFilterSlider"
                        >Time Limit</Label>
                        <Slider
                            defaultValue={[maxTime / 2]}
                            max={maxTime}
                            step={15}
                            id="qaFilterSlider"
                            onValueChange={(e) => setTimeLimit(e[0])}
                            className={"cursor-pointer"}
                        />
                    </div>
                    <AutocompleteInput
                        options={options}
                        value={inputValue}
                        values={values}
                        onChange={setInputValue}
                        onSelect={appendValue}
                    />
                    <div className={"w-full flex flex-row justify-end items-center"}>
                        <Button onClick={startPracticeExam}>Start</Button>
                    </div>
                </div>
                <CurrentFilterValuesDisplay
                    removeItem={removeItem}
                    values={values}
                    timeLimit={timeLimit}
                />
            </div>
        </div>
    )
}


PracticeExamFilterAndSettings.displayName = "PracticeExamFilterAndSettings"


export default PracticeExamFilterAndSettings;
