"use client"
import React from "react";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseFullFormInputProps } from "./types";
import { Input } from "@ulld/tailwind/input";


export interface TextInputProps<
    T extends FieldValues,
    H extends Omit<HTMLElement, "onChange">,
> extends Omit<BaseFullFormInputProps<T, H>, "onChange"> {
    keyboardFilter?: string // TODO: This keyboardFilter needs to be enabled again. Reference original app.
    classes?: {
        formItem?: string
        input?: string
        desc?: string
    }
}

export const TextInput = <T extends FieldValues>({
    name,
    label,
    desc,
    classes={},
    ...props
}: TextInputProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={classes.formItem}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            {...props}
                            {...field}
                            className={classes.input}
                        />
                    </FormControl>
                    {desc && <FormDescription className={classes.desc}>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

TextInput.displayName = "TextInput";
