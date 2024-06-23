import React, { ComponentPropsWithRef, ReactNode } from "react";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@ulld/tailwind/form";
import { Slider } from "@ulld/tailwind/slider";
import cn from "@ulld/utilities/cn";
import { useFormContext, PathValue, Path, FieldValues } from "react-hook-form";

interface SliderInputProps<T extends FieldValues> {
    name: Path<T>;
    label?: ReactNode;
    desc?: ReactNode;
    max?: number;
    min?: number;
    step?: number;
    classes?: {
        formItem?: string;
        slider?: string;
    };
    sliderProps?: ComponentPropsWithRef<typeof Slider>;
}

export const SliderInput = <T extends FieldValues>({
    name,
    classes = {},
    desc,
    label,
    sliderProps,
    max = 100,
    min = 0,
    step = 1,
}: SliderInputProps<T>) => {
    const form = useFormContext<T>();
    const value = form.watch(name);
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={classes?.formItem}>
                    <FormLabel>{label}</FormLabel>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormControl>
                        <Slider
                            defaultValue={[value]}
                            max={max}
                            min={min}
                            step={step}
                            className={cn("w-[60%]", classes.slider)}
                            {...sliderProps}
                            onValueChange={(newValue) => {
                                if (typeof newValue[0] === "number") {
                                    form.setValue(name, newValue[0] as PathValue<T, Path<T>>);
                                }
                            }}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

SliderInput.displayName = "SliderInput";
