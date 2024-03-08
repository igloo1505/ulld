import React, { useState } from 'react'
import { ControllerRenderProps, FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import { BaseFullFormInputProps } from './types';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '#/components/shad/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '#/components/shad/ui/popover';
import { Button } from '#/components/shad/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '#/components/shad/ui/command';
import { ChevronsUpDown, Check } from 'lucide-react';
import clsx from 'clsx';
import { Column, ColumnFiltersState } from '@tanstack/react-table';
import { ToDoListStatus } from '@prisma/client';


export interface FullFormTagSubjectTopicComboBoxProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
    options: string[]
    emptyText?: string
    placeholder: string
    multiple?: boolean
    groupClasses?: string
    formItemClasses?: string
    buttonClasses?: string
    displayTransform?: (v: string) => string
    replaceUnderscores?: boolean
}


const FullFormTagSubjectTopicComboBox = <T extends FieldValues>({ label, replaceUnderscores, desc, name, options, emptyText, displayTransform, placeholder, multiple, groupClasses, buttonClasses, formItemClasses }: FullFormTagSubjectTopicComboBoxProps<T, HTMLTextAreaElement>) => {
    const form = useFormContext<T>()
    const [open, setOpen] = useState(false)

    const getDisplay = (field: ControllerRenderProps<T, Path<T>>) => {
        if (!field.value) {
            return placeholder || ""
        }
        if (multiple) {
            return field.value?.length === 0 ? placeholder : `${options.filter((l) => field.value?.includes(l)).length} items`
        }
        return field.value || ""
    }



    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={clsx("flex flex-col", formItemClasses)}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <Popover
                        open={open}
                        onOpenChange={setOpen}
                    >
                        <FormControl>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className={clsx(
                                        "w-[200px] justify-between",
                                        !field.value && "text-muted-foreground",
                                        buttonClasses
                                    )}
                                >
                                    {replaceUnderscores ? getDisplay(field).replaceAll("_", " ") : getDisplay(field)}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                        </FormControl>
                        <PopoverContent
                            className="w-[200px] p-0"
                        >
                            <Command>
                                <CommandInput placeholder={"search..."} />
                                <CommandEmpty>{emptyText || "Nothing was found"}</CommandEmpty>
                                <CommandGroup className={groupClasses}>
                                    {options.map((o) => (
                                        <CommandItem
                                            value={o}
                                            key={o}
                                            onSelect={(v) => {
                                                let val = options.find((a) => a.toLowerCase() === v)
                                                if (multiple) {
                                                    form.setValue(name, field.value?.includes(val) ? field.value?.filter((l: string) => l !== val) : [...field.value, val])
                                                } else {
                                                    form.setValue(name, val as PathValue<T, Path<T>>)
                                                    setOpen(false)
                                                }
                                            }}
                                        >
                                            <Check
                                                className={clsx(
                                                    "mr-2 h-4 w-4",
                                                    Boolean(multiple ? field.value?.includes(o) : o === field.value)
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {displayTransform ? displayTransform(o) : o}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
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


FullFormTagSubjectTopicComboBox.displayName = "FullFormTagSubjectTopicComboBox"


export default FullFormTagSubjectTopicComboBox;
