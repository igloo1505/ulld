"use client"
import * as React from "react"
import { format } from "date-fns"
import { cn } from "#/utils"
import { Popover } from "@headlessui/react"
import { PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
import { Button } from "../shad/ui/button"
import { Calendar } from "../shad/ui/calendar"
import { CalendarIcon } from "lucide-react"


export function DatePickerDemo() {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

