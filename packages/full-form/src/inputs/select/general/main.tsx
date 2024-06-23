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
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@ulld/tailwind/select";
import React, { ReactNode, useMemo } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseInputProps } from "../../types/fullFormInputProps";

export interface SelectOption {
    value: string;
    label: ReactNode;
}


interface SelectInputProps<T extends FieldValues>
    extends BaseInputProps<T, "formItem" | "selectTrigger"> {
    placeholder?: string;
    options: SelectOption[]
}

export const SelectInput = <T extends FieldValues>({
    desc,
    label,
    name,
    options,
    placeholder = "Select",
    classes = {},
}: SelectInputProps<T>) => {
    const form = useFormContext<T>();
    const optionValues = useMemo(() => options.map((o) => o.value), [options])
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                return (
                    <FormItem className={classes.formItem}>
                        {label && <FormLabel>{label}</FormLabel>}
                        <Select
                            onValueChange={(newVal) => {
                                if(!optionValues.includes(newVal as any)) return
                                field.onChange(newVal)
                            }}
                            defaultValue={field.value}
                            value={field.value === "" ? undefined : field.value}
                        >
                            <FormControl>
                                <SelectTrigger className={classes.selectTrigger}>
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {options.map((o) => {
                                    return (
                                        <SelectItem key={o.value} value={o.value}>
                                            {o.label}
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                        {desc && <FormDescription>{desc}</FormDescription>}
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
};

SelectInput.displayName = "SelectInput";
