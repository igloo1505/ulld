import type { ReactNode } from "react";
import React from "react";
import type { FieldValues } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@ulld/tailwind/form";
import { RadioGroup, RadioGroupItem } from "@ulld/tailwind/radio-group";
import { cn } from "@ulld/utilities/cn";
import type { BaseInputProps } from "../../types/fullFormInputProps";

interface Option {
    label: string;
    value: string;
}

export interface CheckboxOneFromGroupProps<T extends FieldValues>
    extends Omit<
        BaseInputProps<
            T,
            | "option"
            | "radioGroup"
            | "optionFormItem"
            | "optionGroupItem"
            | "optionLabel" 
    | "formControl"
        >,
        "desc"
    > {
    options: Option[];
    /**
     * Align options in a row.
     * @defaultValue false
     */
    alignRow?: boolean;
}

const CheckboxItem = <T extends FieldValues>({
    value,
    label,
    classes = {},
}: CheckboxOneFromGroupProps<T>["options"][number] & {
    classes?: CheckboxOneFromGroupProps<T>["classes"];
}): ReactNode => {
    return (
        <FormItem
            className={cn(
                "flex items-center space-x-3 space-y-0",
                classes.optionFormItem,
            )}
        >
            <FormControl>
                <RadioGroupItem className={classes.optionGroupItem} value={value} />
            </FormControl>
            <FormLabel className={cn("font-normal", classes.optionLabel)}>
                {label}
            </FormLabel>
        </FormItem>
    );
};

export const CheckboxOneFromGroup = <T extends FieldValues>({
    name,
    label,
    options,
    alignRow,
    classes = {},
}: CheckboxOneFromGroupProps<T>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn(alignRow ? "space-y-4" : "space-y-3", classes.formItem)}>
                    <FormLabel className={classes.label}>{label}</FormLabel>
                    <FormControl
                        className={classes.formControl}
                    >
                        <RadioGroup
                            className={cn("flex flex-col space-y-1", alignRow && "flex flex-row justify-start items-end gap-x-4", classes.radioGroup)}
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                        >
                            {options.map((opt) => {
                                return (
                                    <CheckboxItem
                                        {...opt}
                                        classes={classes}
                                        key={`${opt.value}-${opt.label}`}
                                    />
                                );
                            })}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

CheckboxOneFromGroup.displayName = "CheckboxOneFromGroup";
