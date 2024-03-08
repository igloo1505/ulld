import React from 'react'
import { FormField, FormItem, FormLabel, FormDescription, FormControl, FormMessage } from '#/components/shad/ui/form'
import MathStringInput from '#/components/inputs/mathStringInput'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form'
import { BaseFullFormInputProps } from './types'
import type { EditableMathFieldProps } from 'react-mathquill'


interface FullFormMathStringInputProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
}


const FullFormMathStringInput = <T extends FieldValues>({ label, desc, name, ...props }: FullFormMathStringInputProps<T, HTMLInputElement> & EditableMathFieldProps) => {
    const form = useFormContext<T>()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <MathStringInput
                            {...props}
                            value={form.watch(field.name)}
                            setValue={(s: string) => form.setValue(field.name, s as PathValue<T, Path<T>>)}
                        />
                    </FormControl>
                    {desc && <FormDescription>
                        {desc}
                    </FormDescription>}
                    <FormMessage />
                </FormItem>
            )
            }
        />
    )
}


FullFormMathStringInput.displayName = "FullFormMathStringInput"


export default FullFormMathStringInput;
