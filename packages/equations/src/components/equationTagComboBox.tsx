"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@ulld/tailwind/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@ulld/tailwind/command";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@ulld/tailwind/form";
import {
    Popover,
    PopoverContentNoPortal,
    PopoverTrigger,
} from "@ulld/tailwind/popover";
import { UseFormReturn } from "react-hook-form";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { cn } from "@ulld/utilities/cn";

interface EquationTagComboBoxProps {
    form: UseFormReturn<
        {
            query?: string | undefined;
            tags?: string[] | undefined;
            variables?: string[] | undefined;
        },
        any,
        undefined
    >;
    tags: { value: string }[];
    toggle: (t: string) => void;
}

const EquationTagComboBox = ({
    form,
    tags,
    toggle,
}: EquationTagComboBoxProps) => {
    /* const [emWidth, setEmWidth] = useState(0); */
    const ref = useRef<HTMLDivElement>(null!);

    return (
        <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
                <FormItem className="flex flex-col w-full lg:w-fit" ref={ref}>
                    <FormLabel className={""}>Tags</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-full lg:w-[200px] justify-between mt-2",
                                        !field.value && "text-muted-foreground",
                                    )}
                                >
                                    Filter by tags
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContentNoPortal
                            className="w-[200px] p-0"
                        >
                            <Command>
                                <CommandInput placeholder="Search..." />
                                <CommandEmpty>No tags found.</CommandEmpty>
                                <CommandGroup
                                    className={
                                        tags.length ? "max-h-[250px] overflow-y-auto" : "py-0"
                                    }
                                >
                                    {tags.map((t) => (
                                        <CommandItem
                                            value={t.value}
                                            key={t.value}
                                            onSelect={() => {
                                                toggle(t.value);
                                            }}
                                        >
                                            <CheckIcon
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    field.value?.includes(t.value)
                                                        ? "opacity-100"
                                                        : "opacity-0",
                                                )}
                                            />
                                            {t.value}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContentNoPortal>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

EquationTagComboBox.displayName = "EquationTagComboBox";

export default EquationTagComboBox;
