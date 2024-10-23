"use client"
import type { ReactNode } from "react";
import React from "react";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import type { FieldValues} from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@ulld/tailwind/textarea";
import type { BaseFullFormInputProps } from "./types";

interface TextAreaInputProps<T extends FieldValues, H extends HTMLElement>
    extends BaseFullFormInputProps<T, H> { 
      classes?: {
        formItem?: string
        label?: string
        textArea?: string
        desc?: string
    }
}

export const TextAreaInput = <T extends FieldValues>({
    name,
    label,
    desc,
    classes={},
    ...props
}: TextAreaInputProps<T, HTMLTextAreaElement>): ReactNode => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={classes.formItem}>
                    <FormLabel className={classes.label}>{label}</FormLabel>
                    <FormControl>
                        <Textarea {...props} className={classes.textArea} {...field} />
                    </FormControl>
                    {Boolean(desc) && (
                        <FormDescription className={classes.desc}>{desc}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

TextAreaInput.displayName = "TextAreaInput";

