"use client";
import React, { useState } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { Input } from "@ulld/tailwind/input";
import { BaseFullFormInputProps } from "./types";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@ulld/tailwind/form";
import { Badge, BadgeProps } from "@ulld/tailwind/badge";
import { cn } from "@ulld/utilities/cn";
import { onEnter } from "@ulld/state/listeners/keydown";

interface ValidationError {
    type: "minLength" | "maxLength" | "noSpaces";
}

export interface TextInputWithBadgeListProps<
    T extends FieldValues,
    H extends HTMLElement,
> extends BaseFullFormInputProps<T, H> {
    emptyText?: string;
    multiple?: boolean;
    groupClasses?: string;
    buttonClasses?: string;
    displayTransform?: (v: string) => string;
    replaceUnderscores?: boolean;
    type?: "tag" | "topic" | "subject";
    badgeProps?: BadgeProps;
    noSpaces?: boolean;
    maxLength?: number;
    minLength?: number;
    onValidationError?: (e: ValidationError) => void;
    classes?: {
        formItem?: string;
        input?: string;
    };
}


export const TextInputWithBadgeList = <T extends FieldValues>({
    desc,
    label,
    placeholder,
    name,
    badgeProps,
    classes = {},
    noSpaces,
    maxLength,
    minLength,
    onValidationError,
}: TextInputWithBadgeListProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>();
    const values = form.watch(name);
    const [inputValue, setInputValue] = useState("");
    if (
        (noSpaces || maxLength || typeof minLength === "number") &&
        !onValidationError
    ) {
        throw new Error(
            "If you include a noSpaces, maxLength or minLength property, you must also include an onValdiationError property to handle the errors.",
        );
    }

    const validate = (value: string) => {
        if (noSpaces && value.indexOf(" ") !== -1) {
            if (!onValidationError) return;
            return onValidationError({ type: "noSpaces" });
        }
        if (minLength && value.length < minLength) {
            if (!onValidationError) return;
            return onValidationError({ type: "minLength" });
        }
        if (maxLength && value.length > maxLength) {
            if (!onValidationError) return;
            return onValidationError({ type: "maxLength" });
        }
        return true;
    };

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={classes.formItem}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            placeholder={placeholder || ""}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className={classes.input}
                            onKeyDown={(e) =>
                                onEnter(
                                    e,
                                    () => {
                                        const target = e.target as HTMLInputElement;
                                        if (!values.includes(target.value)) {
                                            const isValid = validate(target.value);
                                            if (isValid) {
                                                form.setValue(name, [
                                                    ...values,
                                                    target.value,
                                                ] as PathValue<T, Path<T>>);
                                            }
                                            setInputValue("");
                                        }
                                    },
                                    "onEnter",
                                )
                            }
                        />
                    </FormControl>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                    {(Array.isArray(values) && values.length > 0) && (
                        <div
                            className={
                                "max-w-full flex flex-row gap-2 justify-start items-center flex-wrap pt-4"
                            }
                        >
                            {values.map((v: string) => (
                                <Badge
                                    {...badgeProps}
                                    onClick={(e) => {
                                        form.setValue(
                                            name,
                                            values.filter((a: string) => a !== v),
                                        );
                                        if (badgeProps?.onClick) {
                                            badgeProps.onClick(e);
                                        }
                                    }}
                                    className={cn(
                                        "cursor-pointer text-sm",
                                        badgeProps?.className,
                                    )}
                                >
                                    {v}
                                </Badge>
                            ))}
                        </div>
                    )}
                </FormItem>
            )}
        />
    );

};

TextInputWithBadgeList.displayName = "TextInputWithBadgeList";
