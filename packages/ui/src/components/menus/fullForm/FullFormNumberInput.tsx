import { FormField, FormItem, FormControl, FormLabel, FormDescription } from '#/components/shad/ui/form'
import React from 'react'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form'
import { BaseFullFormInputProps } from './types'
import NumberInput from '#/components/inputs/numberInput'


interface FullFormNumberInputProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
    min?: number
    max?: number
    step?: number
    initial?: number
    defaultValue?: number | string
    integerOnly?: boolean
}


const FullFormNumberInput = <T extends FieldValues>({ label, desc, name, integerOnly, min, max, step, initial, defaultValue, ...props }: FullFormNumberInputProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>()
    const _val = form.watch(name)
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
                        <NumberInput
                            integerOnly={integerOnly}
                            value={_val !== "undefined" ? _val : `${defaultValue}`}
                            onChange={(n) => form.setValue(name, n as PathValue<T, Path<T>>)}
                            min={min}
                            max={max}
                            step={step}
                            initial={initial}
                            label={label}
                            tabIndex={0}
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


FullFormNumberInput.displayName = "FullFormNumberInput"


export default FullFormNumberInput;
