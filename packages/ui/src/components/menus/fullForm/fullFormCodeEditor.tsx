import React from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '#/components/shad/ui/form';
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form'
import { BaseFullFormInputProps } from './types'
import { TextareaCodeEditorProps } from '@uiw/react-textarea-code-editor';
import { FullCodeEditorTextAreaProps, MonacoEditorSupportedLanguage } from '#/components/inputs/codeEditor/monacoEditor';
import TextAreaCodeEditorWithMonacoModal from '#/components/inputs/textAreaCodeEditorWithModal';


interface FullFormCodeEditorWithModalProps<T extends FieldValues, H extends HTMLElement> extends BaseFullFormInputProps<T, H> {
    resizable?: boolean
    monaco?: FullCodeEditorTextAreaProps
}

const FullFormCodeEditorWithModal = <T extends FieldValues>({ label, desc, name, language, ...props }: FullFormCodeEditorWithModalProps<T, HTMLTextAreaElement> & TextareaCodeEditorProps) => {
    const form = useFormContext<T>()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <TextAreaCodeEditorWithMonacoModal
                            {...props}
                            value={form.watch(field.name) as unknown as MonacoEditorSupportedLanguage}
                            onChange={(s) => form.setValue(field.name, s as PathValue<T, Path<T>>)}
                            language={language || "typescript"}
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



FullFormCodeEditorWithModal.displayName = "FullFormCodeEditorWithModal"


export default FullFormCodeEditorWithModal;
