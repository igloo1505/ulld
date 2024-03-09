import { FormControl, FormDescription, FormField, FormItem, FormLabel, Switch } from '@ulld/tailwind/base';
import React from 'react'
import { FieldValues, useFormContext } from 'react-hook-form';
import { BaseFullFormInputProps } from './types';



interface FullFormSwitchInputProps<T extends FieldValues, H extends HTMLElement, L extends string> extends BaseFullFormInputProps<T, H> {
    options: {
        value: L
        content: React.ReactNode
    }[]
    placeholder?: string
}

export const FullFormSwitchInput = <T extends FieldValues, L extends string>({ label, placeholder, desc, name, options, ...props }: FullFormSwitchInputProps<T, HTMLTextAreaElement, L>) => {
    const form = useFormContext<T>()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        {label && <FormLabel className="text-base">
                            {label}
                        </FormLabel>}
                        {desc && <FormDescription>
                            {desc}
                        </FormDescription>}
                    </div>
                    <FormControl>
                        <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    )
}


FullFormSwitchInput.displayName = "FullFormSwitchInput"
