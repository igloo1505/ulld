import React, {useRef} from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { BaseFullFormInputProps } from "../types";
import { makeArrayTransform } from "@ulld/utilities/schemas/transforms";
import { useToggle } from "@ulld/hooks/useToggle";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import { cn } from "@ulld/utilities/cn";
import { ChevronDown } from "lucide-react";
import FullFormMultiSelectItems from "./items";
import {
    autoUpdate,
    flip,
    offset,
    size,
    useDismiss,
    useFloating,
    useInteractions,
} from "@floating-ui/react";
import {useOnClickOutside} from "@ulld/hooks/useClickOutside"

export interface MultiSelectInputProps<
    T extends FieldValues,
    H extends HTMLElement,
    L extends string,
> extends BaseFullFormInputProps<T, H> {
    options: {
        value: L;
        content: React.ReactNode;
    }[];
    maxHeight?: number
    placeholder?: string;
    className?: string;
    contentClasses?: string;
    itemClasses?: string;
    asFloat?: boolean;
    asInt?: boolean;
}

export const MultiSelectInput = <T extends FieldValues, L extends string>({
    label,
    className,
    placeholder,
    desc,
    name,
    options,
    contentClasses,
    itemClasses,
    asFloat,
    asInt,
    maxHeight = 250
}: MultiSelectInputProps<T, HTMLSelectElement, L>) => {
    const form = useFormContext<T>();
    const { value: isOpen, toggle: toggleOpen, setValue: setOpen } = useToggle();
    const values = form.watch(name);
    const appendValue = (val: string | number) => {
        const currentValues = makeArrayTransform(form.getValues(name));
        const newValue = currentValues.includes(val)
            ? currentValues.filter((a) => a !== val)
            : [...currentValues, val];
        return form.setValue(name, newValue as PathValue<T, Path<T>>);
    };

    const {
        context,
        refs,
        floatingStyles,
    } = useFloating({
        placement: "bottom-start",
        transform: false,
        open: isOpen,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({padding: 10}),
            size({
                apply({rects, elements, availableHeight}) {
                      Object.assign(elements.floating.style, {
                        maxHeight: `${Math.min(availableHeight, maxHeight)}px`,
                        minWidth: `${rects.reference.width}px`,
                    })
                },
                padding: 10
            })
        ],
    });

    const dismiss = useDismiss(context)

    const {getReferenceProps, getFloatingProps} = useInteractions([dismiss])




    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <>
                            <button
                                className={cn(
                                    "grid grid-cols-[1fr_1.5rem] place-items-center h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                                    context.open &&
                                    "outline-none ring-2 ring-ring ring-offset-2",
                                    className
                                )}
                                ref={refs.setReference}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleOpen();
                                }}
                                {...getReferenceProps()}
                            >
                                <span
                                    className={
                                        "w-full flex flex-row justify-start items-center text-left"
                                    }
                                >
                                    {values.length === 0
                                        ? placeholder || ""
                                        : values.length === 1
                                            ? values[0]
                                            : `${values.length} items`}
                                </span>
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                            <FullFormMultiSelectItems
                                ref={refs.setFloating}
                                currentValues={values}
                                open={context.open}
                                setOpen={setOpen}
                                appendValue={appendValue}
                                asInt={asInt}
                                asFloat={asFloat}
                                options={options}
                                contentClasses={contentClasses}
                                itemClasses={itemClasses}
                                isMounted={context.open}
                                styles={floatingStyles}
                                context={context}
                                getFloatingProps={getFloatingProps}
                            />
                        </>
                    </FormControl>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

MultiSelectInput.displayName = "MultiSelectInput";
