import React, { useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Button, Calendar } from '@ulld/tailwind/base';
import { CalendarIcon } from 'lucide-react';
import clsx from 'clsx';
import { BaseFullFormInputProps } from './types';
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat)



interface FullFormDateInputProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
    mode?: "single" | "range" | "default" | "multiple"
    dateFilter?: "pastOnly" | "futureOnly" | ((d: Date) => boolean)
    withTime?: boolean
    onChangeValueConverter?: (val: any) => unknown
    buttonClasses?: string
}

export const FullFormDateInput = <T extends FieldValues>({ name, dateFilter, buttonClasses, label, placeholder, mode, desc, onChangeValueConverter, withTime = true }: FullFormDateInputProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>()
    const [open, setOpen] = useState(false)
    const _mode = mode || "single"

    const replaceEndings = (x: string, ending: string) => {
        return x.endsWith(ending) ? x.slice(0, x.length - ending.length) : x
    }

    const getDisplayValue = (v: string | Date | undefined | null) => {
        let d = dayjs(v)
        if (d.isValid()) {
            let x = d.format(withTime ? "MM/DD/YY [at] HH:mm a" : "MMM Do, YYYY")
            Array.from(["at 00:00 am", "at 00:00 pm"]).forEach((ending: string) => {
                x = replaceEndings(x, ending)
            })
            return x
        }
        return "Pick a date"
    }

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    {label && <FormLabel>{label}</FormLabel>}
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant={"outline"}
                                    aria-expanded={open}
                                    className={clsx(
                                        "w-[240px] min-w-fit max-w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground",
                                        buttonClasses
                                    )}
                                >
                                    {getDisplayValue(field.value)}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode={_mode}
                                selected={field.value}
                                onSelect={(val: any) => {
                                    _mode === "single" && setOpen(false)
                                    let nv = onChangeValueConverter ? onChangeValueConverter(val) : val
                                    if (nv !== "abortChange") {
                                        field.onChange(nv)
                                    }
                                }}
                                disabled={(date) => {
                                    if (dateFilter === "pastOnly") {
                                        return Boolean(date > new Date() || date < new Date("1900-01-01"))
                                    } else if (dateFilter === "futureOnly") {
                                        return (date < new Date)
                                    }
                                    else if (typeof dateFilter === "function") {
                                        return dateFilter(date)
                                    }
                                    return false
                                }}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    {desc && <FormDescription>
                        {desc}
                    </FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}


FullFormDateInput.displayName = "FullFormDateInput"
