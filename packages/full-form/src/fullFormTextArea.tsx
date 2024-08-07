"use client"
import React from "react";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseFullFormInputProps } from "./types";
import { Textarea } from "@ulld/tailwind/textarea";

interface TextAreaInputProps<T extends FieldValues, H extends HTMLElement>
    extends BaseFullFormInputProps<T, H> { }

export const TextAreaInput = <T extends FieldValues>({
    name,
    label,
    desc,
    ...props
}: TextAreaInputProps<T, HTMLTextAreaElement>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Textarea {...props} {...field} />
                    </FormControl>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

TextAreaInput.displayName = "TextAreaInput";

