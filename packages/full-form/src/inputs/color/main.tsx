import React, { ReactNode } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import ColorPopover from "./popover";
import {
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import cn from "@ulld/utilities/cn";

interface ColorInputProps<T extends FieldValues> {
    name: Path<T>;
    desc?: ReactNode;
    classes?: {
        container?: string
    };
    label?: ReactNode;
    /** Passed in to style.width and style.height */
    colorChipSize?: string;
    defaultColor?: string;
    setNotDefault?: () => void;
}

export const ColorInput = <T extends FieldValues>({
    name = "icon" as Path<T>,
    desc,
    classes = {},
    label = "Color",
    defaultColor = "#3b81f6",
    colorChipSize = "2rem",
    setNotDefault,
}: ColorInputProps<T>) => {
    const form = useFormContext<T>();
    const value = form.watch(name);
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn("flex flex-row items-center justify-between rounded-lg border p-4 gap-16 bg-background", classes.container)}>
                    <div className={"space-y-0.5"}>
                        <FormLabel className={"text-base text-foreground"}>{label}</FormLabel>
                        {desc && <FormDescription>{desc}</FormDescription>}
                    </div>
                    <ColorPopover
                        value={value}
                        setValue={(colorValue) => {
                            if (setNotDefault) {
                                setNotDefault();
                            }
                            form.setValue(name, colorValue as PathValue<T, Path<T>>);
                        }}
                    >
                        <div
                            role="button"
                            className={"rounded-lg border"}
                            style={{
                                backgroundColor: value || defaultColor,
                                width: colorChipSize,
                                height: colorChipSize,
                            }}
                        />
                    </ColorPopover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

ColorInput.displayName = "ColorInput";
