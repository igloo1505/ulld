import React from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { BaseFullFormInputProps } from "./types";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@ulld/tailwind/select";
import { makeArrayTransform } from "@ulld/utilities/schemas/transforms";

export interface SelectInputProps<
    T extends FieldValues,
    H extends HTMLElement,
    L extends string,
> extends BaseFullFormInputProps<T, H> {
    options: {
        value: L;
        content: React.ReactNode;
    }[];
    placeholder?: string;
    className?: string;
    contentClasses?: string;
    itemClasses?: string;
    asFloat?: boolean;
    asInt?: boolean;
}

export const SelectInput = <T extends FieldValues, L extends string>({
    label,
    className,
    placeholder,
    desc,
    name,
    options,
    contentClasses,
    itemClasses,
    asFloat,
    asInt,
    multiple,
    ...props
}: SelectInputProps<T, HTMLTextAreaElement, L>) => {
    const form = useFormContext<T>();
    const appendValue = (val: string | number) => {
        if (!val || val === "") return;
        if (multiple) {
            const currentValues = makeArrayTransform(form.getValues(name));
            console.log("currentValues: ", currentValues);
            const newValue = currentValues.includes(val)
                ? currentValues.filter((a) => a !== val)
                : [...currentValues, val];
            console.log("newValue: ", newValue);
            return form.setValue(name, newValue as PathValue<T, Path<T>>);
        } else {
            form.setValue(name, val as PathValue<T, Path<T>>);
        }
    };

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <Select
                        /* value={field.value} */
                        onValueChange={
                            asFloat
                                ? (newVal) => appendValue(parseFloat(newVal))
                                : asInt
                                    ? (newVal) => appendValue(parseInt(newVal))
                                    : appendValue
                        }
                        defaultValue={
                            Array.isArray(field.value)
                                ? `${field.value.length} items`
                                : field.value
                        }
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder || undefined} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className={contentClasses}>
                            {options.map((o) => {
                                return (
                                    <SelectItem
                                        key={o.value}
                                        value={o.value}
                                        className={itemClasses}
                                        onClick={() => {
                                            console.log(`Has clicked`);
                                            appendValue(
                                                asFloat
                                                    ? parseFloat(o.value)
                                                    : asInt
                                                        ? parseInt(o.value)
                                                        : o.value,
                                            );
                                        }}
                                    >
                                        {o.content}
                                    </SelectItem>
                                );
                            })}
                        </SelectContent>
                    </Select>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

SelectInput.displayName = "SelectInput";
