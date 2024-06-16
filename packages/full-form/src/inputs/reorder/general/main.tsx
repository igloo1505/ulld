"use client";
import React, { ReactNode } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { BaseInputProps } from "../../types/fullFormInputProps";
import { Reorder } from "framer-motion";
import ReorderItemWithTrigger from "./reorderItemWithTrigger";

interface ReorderStringInputProps<
    T extends FieldValues,
    ItemType extends unknown,
> extends Omit<BaseInputProps<T, "item" | "list" | "dragHandle">, "label" | "desc"> {
    getLabel?: (item: ItemType) => ReactNode;
    getValue?: (item: ItemType) => number | string;
    as?: "ol" | "ul";
    dragHandle?: boolean;
}

const ReorderStringInput = <T extends FieldValues, ItemType extends unknown>({
    name,
    getLabel,
    getValue,
    classes = {},
    as = "ul",
    dragHandle,
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
        <Reorder.Group
            axis="y"
            values={items}
            onReorder={(newItems) => {
                form.setValue(name, newItems as PathValue<T, Path<T>>);
            }}
            className={classes.list}
            as={as}
        >
            {items.map((item) => {
                const value = getValue ? getValue(item) : item;
                const label = getLabel ? getLabel(item) : (item as ReactNode);
                if (dragHandle) {
                    return <ReorderItemWithTrigger item={item} label={label} />;
                }
                return (
                    <Reorder.Item
                        className={classes.item}
                        key={value as string | number}
                        value={item}
                    >
                        {label}
                    </Reorder.Item>
                );
            })}
        </Reorder.Group>
    );
};

ReorderStringInput.displayName = "ReorderStringInput";

export default ReorderStringInput;
