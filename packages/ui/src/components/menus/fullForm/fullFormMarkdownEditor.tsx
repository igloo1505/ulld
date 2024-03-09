import React from 'react'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import { BaseFullFormInputProps } from './types';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@ulld/tailwind';
import MarkdownEditor from '@uiw/react-markdown-editor';


interface FullFormMarkdownEditorInputProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
}

export const FullFormMarkdownEditorInput = <T extends FieldValues>({ label, desc, name, ...props }: FullFormMarkdownEditorInputProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <MarkdownEditor
                            value={field.value}
                            onChange={(newValue: string) => form.setValue(name, newValue as PathValue<T, Path<T>>)}
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


FullFormMarkdownEditorInput.displayName = "FullFormMarkdownEditorInput"
