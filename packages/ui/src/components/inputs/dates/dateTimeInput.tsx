import React, { ChangeEvent, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Input } from '@ulld/tailwind/input'
import "react-datepicker/dist/react-datepicker.css";
import "./dateTimePicker.scss"

interface DateTimeInputProps {
    value?: Date | null
    handleChange: (s: Date | null) => void
}

/* WARNING: Actual text input not working for time. Appears to be a state issue not being shared properly between react-datepicker and Shadcn, but will figure it out later. For right now the scrolling select menu is working fine. */
export const DateTimeInput = ({ value, handleChange }: DateTimeInputProps) => {
    const [time, setTime] = useState("")

    const setTimeInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("e: ", e)
        let target = e?.target as HTMLInputElement
        console.log("e.target.value: ", target.value)
        setTime(target.value)

    }
    return (
        <DatePicker
            selected={value}
            onChange={handleChange}
            showTimeInput
            showTimeSelect
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            customTimeInput={<Input
                /* value={value?.toString() || ""} */
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    let newDate = e.target.value as (Date | string)
                    handleChange(newDate instanceof Date ? newDate : new Date(newDate))
                    console.log("Event here?", e)
                }}
            />}
            customInput={<Input
            />}
        />
    )
}


DateTimeInput.displayName = "DateTimeInput"
