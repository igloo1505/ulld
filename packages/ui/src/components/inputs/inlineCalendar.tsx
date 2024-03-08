"use client"
import { useState } from "react"
import { Calendar } from "../shad/ui/calendar"



interface InlineCalendarProps {

}

const InlineCalendar = (props: InlineCalendarProps) => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
    )
}


InlineCalendar.displayName = "InlineCalendar"


export default InlineCalendar;
