"use client";
import React from "react";
import {
    ControllerRenderProps,
    FieldValues,
    Path,
    PathValue,
    useFormContext,
} from "react-hook-form";
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
}

export const TextInputWithBadgeList = <T extends FieldValues>({
    formItemClasses,
    desc,
    label,
    placeholder,
    name,
    badgeProps,
}: TextInputWithBadgeListProps<T, HTMLInputElement>) => {
    const form = useFormContext<T>();
    const values = form.watch(name);
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={formItemClasses}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder || ""} {...field} />
                    </FormControl>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                    {Array.isArray(values) && values.length > 0 && (
                        <div
                            className={
                                "max-w-full flex flex-row gap-2 justify-start items-center flex-wrap"
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
