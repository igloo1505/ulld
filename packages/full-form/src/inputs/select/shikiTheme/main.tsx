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
import React, { ReactNode } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import themes from "@ulld/utilities/shikiThemes";
import { BaseInputProps } from "../../types/fullFormInputProps";

interface SelectOption {
    value: string;
    label: ReactNode;
}

const options: SelectOption[] = themes.map((t) => ({
    value: t,
    label: t,
}));

interface ShikiThemeSelectProps<T extends FieldValues>
    extends BaseInputProps<T, "formItem" | "selectTrigger"> {
    placeholder?: string;
}

export const ShikiThemeSelect = <T extends FieldValues>({
    desc,
    label,
    name,
    placeholder = "Select a theme",
    classes = {},
}: ShikiThemeSelectProps<T>) => {
    const form = useFormContext<T>();
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
                                if(!themes.includes(newVal as any)) return
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

ShikiThemeSelect.displayName = "ShikiThemeSelect";
