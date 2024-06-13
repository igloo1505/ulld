import React, { ReactNode } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import ColorPopover from "./popover";
import { Button } from "@ulld/tailwind/button";
import {
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";

interface ColorInputProps<T extends FieldValues> {
    name: Path<T>;
    desc?: ReactNode;
    classes?: {};
    label?: ReactNode;
}

export const ColorInput = <T extends FieldValues>({
    name = "icon" as Path<T>,
    desc,
    classes,
    label = "Color",
}: ColorInputProps<T>) => {
    const form = useFormContext<T>();
    const value = form.watch(name);
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>{label}</FormLabel>
                    <ColorPopover
                        value={value}
                        setValue={(colorValue) =>
                            form.setValue(name, colorValue as PathValue<T, Path<T>>)
                        }
                    >
                        <Button
                            variant={"outline"}
                            className={"flex flex-row justify-center items-center gap-4"}
                        >
                            <div
                                style={{
                                    backgroundColor: value,
                                    width: "8px",
                                    height: "8px",
                                }}
                            />
                            <span>{label}</span>
                        </Button>
                    </ColorPopover>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

ColorInput.displayName = "ColorInput";
