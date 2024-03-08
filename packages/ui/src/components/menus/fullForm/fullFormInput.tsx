"use client";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "#/components/shad/ui/form";
import { Input, InputProps } from "#/components/shad/ui/input";
import { KeyboardFilterType, getKeyboardFilter } from "#/lib/formatting/inputManipulation/getKeyboardFilter";
import React, { useId } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

interface FullFormInputProps<T extends FieldValues>
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
    label: string;
    id?: string;
    name: Path<T>;
    desc?: string
    keyboardFilter?: KeyboardFilterType
    className?: string
}


const FullFormInput = <T extends FieldValues>({
    label,
    id: __id,
    desc,
    name,
    className,
    keyboardFilter,
    ...props
}: FullFormInputProps<T>) => {
    const form = useFormContext<T>()
    const filter = getKeyboardFilter<HTMLInputElement>(keyboardFilter, props)
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input
                            {...getKeyboardFilter<HTMLInputElement>(keyboardFilter, {
                                ...props,
                                ...field
                            }) as React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>}
                            onChange={(e) => {
                                if (filter.onChange) {
                                    filter.onChange(e)
                                }
                                form.setValue(name, e.target.value as PathValue<T, Path<T>>)
                            }}
                        />
                    </FormControl>
                    {desc && <FormDescription>
                        {desc}
                    </FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

FullFormInput.displayName = "FullFormInput";

export default FullFormInput;
