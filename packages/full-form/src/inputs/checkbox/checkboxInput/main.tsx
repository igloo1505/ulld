import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseInputProps } from "../../types/fullFormInputProps";
import { Checkbox } from "@ulld/tailwind/checkbox";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormDescription,
} from "@ulld/tailwind/form";
import { cn } from "@ulld/utilities/cn";

interface CheckboxInputProps<T extends FieldValues>
    extends BaseInputProps<T, "checkbox"> { 
    border?: boolean
}

export const CheckboxInput = <T extends FieldValues>({
    name,
    label,
    desc,
    border,
    classes = {},
}: CheckboxInputProps<T>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem
                    className={cn(
                        "flex flex-row items-start space-x-3 space-y-0 rounded-md p-4",
                        border && "border",
                        classes.formItem,
                    )}
                >
                    <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>{label}</FormLabel>
                        {desc && <FormDescription>{desc}</FormDescription>}
                    </div>
                </FormItem>
            )}
        />
    );
};

CheckboxInput.displayName = "CheckboxInput";
