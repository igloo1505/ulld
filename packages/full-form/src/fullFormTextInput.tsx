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


interface TextInputProps<
    T extends FieldValues,
    H extends Omit<HTMLElement, "onChange">,
> extends Omit<BaseFullFormInputProps<T, H>, "onChange"> {
    keyboardFilter?: string // TODO: This keyboardFilter needs to be enabled again. Reference original app.
}

export const TextInput = <T extends FieldValues>({
    name,
    label,
    desc,
    ...props
}: TextInputProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            {...props}
                            {...field}
                        />
                    </FormControl>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

TextInput.displayName = "TextInput";
