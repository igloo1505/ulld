import React from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'
import { BaseFullFormInputProps } from './types'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ulld/tailwind/base';



export interface FullFormSelectInputProps<T extends FieldValues, H extends HTMLElement, L extends string> extends BaseFullFormInputProps<T, H> {
    options: {
        value: L
        content: React.ReactNode
    }[]
    placeholder?: string
    className?: string
    contentClasses?: string
    itemClasses?: string
    asFloat?: boolean
    asInt?: boolean
}


export const FullFormSelectInput = <T extends FieldValues, L extends string>({ label, className, placeholder, desc, name, options, contentClasses, itemClasses, asFloat, asInt, ...props }: FullFormSelectInputProps<T, HTMLTextAreaElement, L>) => {
    const form = useFormContext<T>()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <Select onValueChange={asFloat ? (newVal) => field.onChange(parseFloat(newVal)) : asInt ? (newVal) => field.onChange(parseInt(newVal)) : field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder || undefined} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className={contentClasses}>
                            {options.map((o) => {
                                return (
                                    <SelectItem
                                        key={o.value}
                                        value={o.value}
                                        className={itemClasses}
                                    >{o.content}</SelectItem>
                                )
                            })}
                        </SelectContent>
                    </Select>
                    {desc && <FormDescription>
                        {desc}
                    </FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}


FullFormSelectInput.displayName = "FullFormSelectInput"
