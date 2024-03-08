import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '#/components/shad/ui/form';
import { Textarea } from '#/components/shad/ui/textarea';
import React from 'react'
import { FieldValues, useFormContext } from 'react-hook-form';
import { BaseFullFormInputProps } from './types';
import clsx from 'clsx';



interface FullFormTextAreaProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
    resizable?: boolean
}

const FullFormTextArea = <T extends FieldValues>({ label, desc, resizable = true, name, ...props }: FullFormTextAreaProps<T, HTMLTextAreaElement>) => {

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
                            className={clsx(!resizable && "resize-none")}
                            {...props}
                            {...field}
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


FullFormTextArea.displayName = "FullFormTextArea"


export default FullFormTextArea;
