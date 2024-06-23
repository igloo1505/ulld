import { FormField, FormItem, FormControl, FormLabel, FormDescription, FormMessage } from '@ulld/tailwind/form'
import React, { ComponentProps } from 'react'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form'
import { BaseFullFormInputProps } from './types'
import { NumberInput as NumberInputComponent } from './inputs/number/numberInput'
import { NumberInputProps } from './inputs/number/types'
import type { NumberInputPopover } from './inputs/number/numberInputPopover'


interface FullFormNumberInputProps<T extends FieldValues, H extends Omit<HTMLElement, "onChange">> extends Omit<BaseFullFormInputProps<T, H>, "onChange"> {
    min?: number
    max?: number
    step?: number
    initial?: number
    defaultValue?: number
    integerOnly?: boolean
}


export const NumberInput = <T extends FieldValues>({ label, desc, name, step, defaultValue, ...props }: FullFormNumberInputProps<T, Omit<HTMLInputElement, "onChange">> & Omit<NumberInputProps, "onChange" | "value" | "step"> & Omit<ComponentProps<typeof NumberInputPopover>, "onChange" | "value" | "step"> ) => {
    const form = useFormContext<T>()
    const _val = form.watch(name)
    const handleNumChange: NumberInputProps["onChange"] = (n) => form.setValue(name, n as PathValue<T, Path<T>>)
    return (
        <FormField
            control={form.control}
            name={name}
            render={(fieldProps) => (
                <FormItem>
                    {label && <FormLabel>
                        {label}
                    </FormLabel>}
                    <FormControl>
                       <NumberInputComponent
                            modalTitle={label}
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
                      <FormMessage />
                </FormItem>
            )}
        />
    )
}


NumberInput.displayName = "FullFormNumberInput"
