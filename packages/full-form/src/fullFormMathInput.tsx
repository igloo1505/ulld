import React from "react";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import { FieldValues, useFormContext, Path, PathValue } from "react-hook-form";
import { BaseFullFormInputProps } from "./types";
import { MathInput as MathInputComponent } from "./inputs/math/mathInput";


interface MathInputProps<T extends FieldValues, H extends HTMLElement>
    extends BaseFullFormInputProps<T, H> { }



export const MathInput = <T extends FieldValues>({
    desc,
    label,
    name,
    ...props
}: MathInputProps<T, HTMLElement>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <MathInputComponent
                            {...props}
                            value={field.value || ""}
                            onChange={(latexValue: string) => {
                                form.setValue(
                                    name as Path<T>,
                                    latexValue as PathValue<T, Path<T>>,
                                );
                            }}
                        />
                    </FormControl>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
