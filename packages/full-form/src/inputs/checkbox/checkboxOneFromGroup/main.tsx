import React, { ReactNode } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseInputProps } from "../../types/fullFormInputProps";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@ulld/tailwind/form";
import { RadioGroup, RadioGroupItem } from "@ulld/tailwind/radio-group";

interface Option {
    label: ReactNode;
    value: string;
}

interface CheckboxOneFromGroupProps<T extends FieldValues>
    extends Omit<BaseInputProps<T, "">, "desc"> {
    options: Option[];
}

const CheckboxItem = <T extends FieldValues>({
    value,
    label,
}: CheckboxOneFromGroupProps<T>["options"][number]) => {
    return (
        <FormItem className="flex items-center space-x-3 space-y-0">
            <FormControl>
                <RadioGroupItem value={value} />
            </FormControl>
            <FormLabel className="font-normal">{label}</FormLabel>
        </FormItem>
    );
};

export const CheckboxOneFromGroup = <T extends FieldValues>({
    name,
    label,
    options
}: CheckboxOneFromGroupProps<T>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                        >
                            {options.map((opt) => {
                                return (
                                <CheckboxItem 
                                        {...opt}
                                    />
                                )
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
