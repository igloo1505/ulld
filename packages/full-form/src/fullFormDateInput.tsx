import React, { useState } from "react";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@ulld/tailwind/popover";
import { Button } from "@ulld/tailwind/button";
import { Calendar } from "@ulld/tailwind/calendar";
import { CalendarIcon } from "lucide-react";
import clsx from "clsx";
import { BaseFullFormInputProps } from "./types";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import TimeInput, {
    TimeInputProps,
} from "./inputs/dateTime/INTERNAL_timeInput";
dayjs.extend(advancedFormat);

type TimePositionOptions =
    | "button-side-by-side"
    | "popover-bottom"
    | "popover-top";

interface FullFormDateInputProps<T extends FieldValues, H extends HTMLElement>
    extends BaseFullFormInputProps<T, H> {
    mode?: "single" | "range" | "default" | "multiple";
    dateFilter?: "pastOnly" | "futureOnly" | ((d: Date) => boolean);
    withTimeDisplay?: boolean;
    onChangeValueConverter?: (val: any) => unknown;
    buttonClasses?: string;
    timeProps?: Omit<TimeInputProps, "value" | "onChange">;
    timePosition?: TimePositionOptions;
}

export const DateInput = <T extends FieldValues>({
    name,
    dateFilter,
    buttonClasses,
    label,
    placeholder = "Pick a date",
    mode,
    desc,
    onChangeValueConverter,
    withTimeDisplay = true,
    timeProps,
    timePosition,
}: FullFormDateInputProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>();
    const [open, setOpen] = useState(false);
    const _mode = mode || "single";

    const replaceEndings = (x: string, ending: string) => {
        return x.endsWith(ending) ? x.slice(0, x.length - ending.length) : x;
    };

    const getDisplayValue = (v: string | Date | undefined | null) => {
        let d = dayjs(v);
        if (d.isValid()) {
            let x = d.format(Boolean(withTimeDisplay || timePosition) ? "MM/DD/YY [at] HH:mm a" : "MMM Do, YYYY");
            Array.from(["at 00:00 am", "at 00:00 pm"]).forEach((ending: string) => {
                x = replaceEndings(x, ending);
            });
            return x;
        }
        return placeholder;
    };

    return (
        <>
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
                                            buttonClasses,
                                        )}
                                    >
                                        {getDisplayValue(field.value)}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                {timePosition === "popover-top" && (
                                    <TimeInput
                                        {...timeProps}
                                        value={form.watch(name)}
                                        onChange={(newVal) =>
                                            form.setValue(name, newVal as PathValue<T, Path<T>>)
                                        }
                                    />
                                )}
                                <Calendar
                                    mode={_mode}
                                    selected={field.value}
                                    onSelect={(val: any) => {
                                        _mode === "single" && setOpen(false);
                                        let nv = onChangeValueConverter
                                            ? onChangeValueConverter(val)
                                            : val;
                                        if (nv !== "abortChange") {
                                            field.onChange(nv);
                                        }
                                    }}
                                    disabled={(date) => {
                                        if (dateFilter === "pastOnly") {
                                            return Boolean(
                                                date > new Date() || date < new Date("1900-01-01"),
                                            );
                                        } else if (dateFilter === "futureOnly") {
                                            return date < new Date();
                                        } else if (typeof dateFilter === "function") {
                                            return dateFilter(date);
                                        }
                                        return false;
                                    }}
                                    initialFocus
                                />
                                {timePosition === "popover-bottom" && (
                                    <TimeInput
                                        {...timeProps}
                                        value={form.watch(name)}
                                        onChange={(newVal) =>
                                            form.setValue(name, newVal as PathValue<T, Path<T>>)
                                        }
                                    />
                                )}
                            </PopoverContent>
                        </Popover>
                        {desc && <FormDescription>{desc}</FormDescription>}
                        <FormMessage />
                    </FormItem>
                )}
            />
            {timePosition === "button-side-by-side" && (
                <TimeInput
                    {...timeProps}
                    value={form.watch(name)}
                    onChange={(newVal) =>
                        form.setValue(name, newVal as PathValue<T, Path<T>>)
                    }
                />
            )}
        </>
    );
};

DateInput.displayName = "DateInput";
