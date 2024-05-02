import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@ulld/tailwind/form";
import React from "react";
import {
    RadioGroupItem,
    RadioGroup as RadioGroupShad,
} from "@ulld/tailwind/radio-group";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseFullFormInputProps } from "./types";

interface RadioGroupProps<
    T extends FieldValues,
    H extends Omit<HTMLElement, "onChange">,
> extends Omit<BaseFullFormInputProps<T, H>, "onChange"> { 
    items: {
        value: string,
        desc: string
    }[]
}

const RadioGroup = <T extends FieldValues>({ name, label, items }: RadioGroupProps<T, HTMLButtonElement>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <RadioGroupShad
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                        >
                        {items.map((k) => {
                                return (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value={k.value} />
                                </FormControl>
                                <FormLabel className="font-normal">{k.desc}</FormLabel>
                            </FormItem>
                                )
                            })}
                        </RadioGroupShad>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
