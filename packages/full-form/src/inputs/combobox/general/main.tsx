"use client"
import React, { CSSProperties, ReactNode, useState } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
    FormControl,
} from "@ulld/tailwind/form";
import {
    CommandInput,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    Command,
    CommandList,
} from "@ulld/tailwind/command";
import {
    Popover,
    PopoverTrigger,
    PopoverContentNoPortal,
} from "@ulld/tailwind/popover";
import cn from "@ulld/utilities/cn";
import { ChevronsUpDown, Check } from "lucide-react";
import { Button } from "@ulld/tailwind/button";

export interface Option<J extends string | number> {
    label: string;
    value: J;
}

export interface ComboboxInputProps<T extends FieldValues, J extends string | number> {
    options: Option<J>[];
    name: Path<T>;
    label: ReactNode;
    desc?: ReactNode;
    placeholder?: ReactNode;
    inputPlaceholder?: string;
    notFoundText?: ReactNode;
    onOpenChange?: (isOpen: boolean) => void
    classes?: {
        formItem?: string;
        button?: string;
        popoverContent?: string;
        commandList?: string
        option?: string
    };
    ids?: {
        popoverContent?: string
    }
    styles?: {
        popoverContent?: CSSProperties
        button?: CSSProperties
    }
}

export const ComboboxInput = <
    T extends FieldValues,
    J extends string | number,
>({
    name,
    desc,
    label,
    placeholder = "Search",
    inputPlaceholder = "Search...",
    classes = {},
    notFoundText = "Nothing found",
    styles,
    options,
    ids,
    onOpenChange
}: ComboboxInputProps<T, J>) => {
    const form = useFormContext<T>();
    const [open, setOpen] = useState(false);
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                return (
                    <FormItem className={cn("flex flex-col", classes.formItem)}>
                        <FormLabel>{label}</FormLabel>
                        <Popover open={open} onOpenChange={(newOpen) => {
                                if(onOpenChange){
                                    onOpenChange(newOpen)
                                }
                                setOpen(newOpen)
                            }}>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            "w-[200px] justify-between",
                                            !field.value && "text-muted-foreground",
                                            classes.button,
                                        )}
                                        style={styles?.button}
                                    >
                                        <div className={"flex-grow text-left"}>
                                        {field.value
                                            ? options.find((item) => item.value === field.value)
                                                ?.label
                                            : placeholder}
                                        </div>
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContentNoPortal
                                className={cn("w-[200px] p-0", classes.popoverContent)}
                                style={styles?.popoverContent}
                                id={ids?.popoverContent}
                            >
                                <Command>
                                    <CommandInput placeholder={inputPlaceholder} />
                                    <CommandList className={cn("listyList", classes.commandList)}>
                                        <CommandEmpty>{notFoundText}</CommandEmpty>
                                        <CommandGroup className={""}>
                                            {options.map((item) => (
                                                <CommandItem
                                                    value={item.label}
                                                    key={item.value}
                                                    className={classes.option}
                                                    onSelect={() => {

                                                        form.setValue(
                                                            name,
                                                            item.value as PathValue<T, Path<T>>,
                                                        );
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            item.value === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0",
                                                        )}
                                                    />
                                                    {item.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContentNoPortal>
                        </Popover>
                        {desc && <FormDescription>{desc}</FormDescription>}
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
};

ComboboxInput.displayName = "ComboboxInput";
