import {
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormControl,
} from "@ulld/tailwind/form";
import React from "react";
import { FieldValue, FieldValues, useFormContext } from "react-hook-form";
import { BaseFullFormInputProps } from "./types";
import { Switch } from "@ulld/tailwind/switch";

interface SwitchInputProps<
    T extends FieldValues,
    H extends Omit<HTMLElement, "onChange">,
> extends Omit<BaseFullFormInputProps<T, H>, "onChange"> { }

export const SwitchInput = <T extends FieldValues>({
    name,
    desc,
    label,
}: SwitchInputProps<T, HTMLButtonElement>) => {
    const form = useFormContext<T>();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <FormLabel className="text-base">{label}</FormLabel>
                        {desc && <FormDescription>{desc}</FormDescription>}
                    </div>
                    <FormControl>
                        <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            disabled
                            aria-readonly
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

SwitchInput.displayName = "SwitchInput";
