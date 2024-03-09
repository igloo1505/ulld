"use client"
import { Calendar } from "@ulld/tailwind"
import { useState } from "react"



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
