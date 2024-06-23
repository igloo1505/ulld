"use client";
import React, { ReactNode } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { BaseInputProps } from "../../types/fullFormInputProps";
import { Reorder } from "framer-motion";
import ReorderItemWithTrigger from "./reorderItemWithTrigger";
import cn from "@ulld/utilities/cn";
import { FormDescription, FormLabel } from "@ulld/tailwind/form";

interface ReorderStringInputProps<
    T extends FieldValues,
    ItemType extends unknown,
> extends BaseInputProps<T, "item" | "list" | "dragHandle"> {
    getLabel?: (item: ItemType) => ReactNode;
    getValue?: (item: ItemType) => number | string;
    as?: "ol" | "ul";
    dragHandle?: boolean;
}

export const ReorderStringInput = <
    T extends FieldValues,
    ItemType extends unknown,
>({
    name,
    getLabel,
    getValue,
    classes = {},
    as = "ul",
    dragHandle,
    label,
    desc,
}: ReorderStringInputProps<T, ItemType>) => {
    const form = useFormContext<T>();
    const items: ItemType[] = form.getValues(name);
    if (
        items[0] &&
        !["number", "string"].includes(typeof items[0]) &&
        !(getValue && getLabel)
    ) {
        throw new Error(
            "To use an item that is not a number or a string, provide getValue and getLabel props.",
        );
    }
    return (
        <>
            {label && <FormLabel className={classes.label}>{label}</FormLabel>}
            {desc && <FormDescription className={cn("mt-2", classes.desc)}>{desc}</FormDescription>}
            <Reorder.Group
                axis="y"
                values={items}
                onReorder={(newItems) => {
                    form.setValue(name, newItems as PathValue<T, Path<T>>);
                }}
                className={cn("w-fit min-w-fit", classes.list)}
                as={as}
            >
                {items.map((item) => {
                    const value = getValue ? getValue(item) : item;
                    const label = getLabel ? getLabel(item) : (item as ReactNode);
                    if (dragHandle) {
                        return (
                            <ReorderItemWithTrigger
                                item={item}
                                label={label}
                                classes={classes}
                            />
                        );
                    }
                    return (
                        <Reorder.Item
                            className={cn(
                                "px-4 py-3 border bg-background cursor-pointer hover:bg-secondary/60 transition-colors duration-200",
                                classes.item,
                            )}
                            key={value as string | number}
                            value={item}
                        >
                            {label}
                        </Reorder.Item>
                    );
                })}
            </Reorder.Group>
        </>
    );
};

ReorderStringInput.displayName = "ReorderStringInput";
