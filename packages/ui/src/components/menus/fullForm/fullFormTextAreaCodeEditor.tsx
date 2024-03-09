import React from 'react'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form'
import { BaseFullFormInputProps } from './types'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@ulld/tailwind/base';
import { Technologies } from '@ulld/api';
import { TextareaCodeEditorProps } from '@uiw/react-textarea-code-editor';
import { TextAreaCodeEditor } from '../../inputs/textAreaCodeEditor';



interface FullFormTextAreaProps<T extends FieldValues, H extends HTMLElement> extends Omit<BaseFullFormInputProps<T, H>, "width" | "height"> {
    resizable?: boolean
    language: Technologies
}

export const FullFormTextAreaCodeEditor = <T extends FieldValues>({ label, desc, name, language, ...props }: FullFormTextAreaProps<T, HTMLTextAreaElement> & Omit<TextareaCodeEditorProps, "width" | "height">) => {
    const form = useFormContext<T>()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <TextAreaCodeEditor
                            {...props}
                            value={form.watch(field.name)}
                            onChange={(s) => form.setValue(field.name, s as PathValue<T, Path<T>>)}
                            language={language}
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


FullFormTextAreaCodeEditor.displayName = "FullFormTextAreaCodeEditor"
