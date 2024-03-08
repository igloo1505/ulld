import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '#/components/shad/ui/form';
import { Textarea } from '#/components/shad/ui/textarea';
import { FieldValues, useFormContext } from 'react-hook-form';
import { BaseFullFormInputProps } from './types';

interface FullFormTextAreaInputProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {

}

const FullFormTextAreaInput = <T extends FieldValues>({ label, desc, name, ...props }: FullFormTextAreaInputProps<T, HTMLTextAreaElement>) => {
    const form = useFormContext<T>()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Textarea
                            className="w-full"
                            {...field}
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


FullFormTextAreaInput.displayName = "FullFormTextAreaInput"


export default FullFormTextAreaInput;
