import { Checkbox as CheckboxEm} from '@ulld/tailwind/checkbox'
import { FormField, FormItem, FormLabel, FormDescription, FormControl } from '@ulld/tailwind/form'
import React from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'
import { BaseFullFormInputProps } from './types'
import { TertiaryToggle } from "./tertiaryToggle"



interface CheckboxProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
    tertiary?: boolean
}


export const Checkbox = <T extends FieldValues>({ label, tertiary, desc, name, ...props }: CheckboxProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                        {tertiary ? (
                            <TertiaryToggle
                                small
                                value={field.value}
                                onChange={field.onChange}
                            />
                        ) : (<CheckboxEm
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />)}
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        {label && <FormLabel>
                            {label}
                        </FormLabel>}
                        {desc && <FormDescription>
                            {desc}
                        </FormDescription>}
                    </div>
                </FormItem>
            )}
        />
    )
}


Checkbox.displayName = "Checkbox"


export default Checkbox;
