import { FormField, FormItem, FormControl, FormLabel, FormDescription } from '@ulld/tailwind/form'
import React from 'react'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form'
import { BaseFullFormInputProps } from './types'
import { NumberInput as NumberInputComponent } from '@ulld/ui/inputs/number'
import { NumberInputProps } from '@ulld/ui/inputs/number/types'


interface FullFormNumberInputProps<T extends FieldValues, H extends Omit<HTMLElement, "onChange">> extends Omit<BaseFullFormInputProps<T, H>, "onChange"> {
    min?: number
    max?: number
    step?: number
    initial?: number
    defaultValue?: number
    integerOnly?: boolean
}


export const NumberInput = <T extends FieldValues>({ label, desc, name, step, defaultValue, ...props }: FullFormNumberInputProps<T, Omit<HTMLInputElement, "onChange">> & Omit<NumberInputProps, "onChange" | "value">) => {
    const form = useFormContext<T>()
    const _val = form.watch(name)
    const handleNumChange: NumberInputProps["onChange"] = (n) => form.setValue(name, n as PathValue<T, Path<T>>)
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>
                        {label}
                    </FormLabel>}
                    <FormControl>
                       <NumberInputComponent
                            {...props}
                            step={step || 1}
                            label={label}
                            onChange={handleNumChange}
                            value={_val as number}
                        />
                    </FormControl>
                    {desc && <FormDescription>
                        {desc}
                    </FormDescription>}
                </FormItem>
            )}
        />
    )
}


NumberInput.displayName = "FullFormNumberInput"
