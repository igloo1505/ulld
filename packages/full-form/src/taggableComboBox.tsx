import React, { useState, useEffect, useRef } from "react";
import {
    FieldValues,
    Path,
    PathValue,
    useFormContext,
} from "react-hook-form";
import { BaseFullFormInputProps } from "./types";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@ulld/tailwind/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@ulld/tailwind/popover";
import { Button } from "@ulld/tailwind/button";
import { client } from "@ulld/api/client";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@ulld/tailwind/command";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@ulld/utilities/cn"
import { onEnter } from "@ulld/state/listeners/keydown";



export interface TaggableComboBoxProps<
    T extends FieldValues,
    H extends HTMLElement,
> extends BaseFullFormInputProps<T, H> {
    options?: string[];
    emptyText?: string;
    placeholder?: string;
    multiple?: boolean;
    groupClasses?: string;
    formItemClasses?: string;
    buttonClasses?: string;
    displayTransform?: (v: string) => string;
    replaceUnderscores?: boolean;
    type?: "tag" | "topic" | "subject";
    fullWidth?: boolean
    popoverClasses?: string
}

const combineIfUnique = (base: string[], other: string[]) => {
    let b = base;
    other?.forEach((o) => {
        if (!b.includes(o)) {
            b.push(o);
        }
    });
    return b;
};

export const TaggableComboBox = <T extends FieldValues>({
    label,
    replaceUnderscores,
    desc,
    name,
    options: _options,
    emptyText,
    displayTransform,
    placeholder,
    multiple,
    groupClasses,
    buttonClasses,
    popoverClasses,
    formItemClasses,
    type,
    fullWidth
}: TaggableComboBoxProps<T, HTMLTextAreaElement>) => {
    const form = useFormContext<T>();
    const [open, setOpen] = useState(false);
    const cmdRef = useRef<HTMLDivElement>(null!);
    const [options, setOptions] = useState<string[]>([]);
    const [btnDisplay, setBtnDisplay] = useState(Boolean(placeholder) ? placeholder : `${type}s`)

    const gatherOptions = async (_type: "tag" | "topic" | "subject") => {
        let opts = await client.search.getUniqueTagTopicAndSubjects.query(_type);
        setOptions(Array.isArray(opts) ? opts : opts[`${_type}s`]);
    };

    const formValues = form.watch(name)

    useEffect(() => {
       setOptions(combineIfUnique(options, formValues))
    }, [formValues])


    useEffect(() => {
        if ((!_options || _options?.length === 0) && type) {
            gatherOptions(type);
        }
    }, [_options, type]);

    const getDisplay = (_formValues: string[]) => {
        if (!_formValues) {
            return placeholder || `${type}s`;
        }
        if (multiple) {
            return _formValues?.length === 0
                ? Boolean(placeholder) ? placeholder : `${type}s`
                : `${options.filter((l) => _formValues?.includes(l)).length} items`;
        }
        return `${type}s`
    };

    useEffect(() => {
       setBtnDisplay(getDisplay(formValues as string[])) 
    }, [formValues])

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn("flex flex-col", formItemClasses)}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <Popover open={open} onOpenChange={setOpen}>
                        <FormControl>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className={cn(
                                        "w-[200px] justify-between",
                                        fullWidth && "w-full",
                                        !field.value && "text-muted-foreground",
                                        buttonClasses,
                                    )}
                                >
                                    {btnDisplay}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                        </FormControl>
                        <PopoverContent
                            ref={cmdRef} 
                            className={cn("w-[var(--radix-popper-anchor-width)] p-0", popoverClasses)}
                        >
                            <Command>
                                <CommandInput
                                    placeholder={"search..."}
                                    onKeyDown={(e) =>
                                        onEnter(e, () => {
                                            if (
                                                !cmdRef.current.querySelectorAll(
                                                    '[cmdk-item][data-selected="true"]',
                                                )?.length
                                            ) {
                                                const target = e.target as HTMLInputElement;
                                                const val = target.value;
                                                form.setValue(
                                                    name,
                                                    field.value?.includes(val)
                                                        ? field.value?.filter((l: string) => l !== val)
                                                        : [...field.value, val],
                                                );
                                                target.value = "";
                                                setOpen(false)
                                            }
                                        })
                                    }
                                />
                                <CommandEmpty>{emptyText || "Nothing was found"}</CommandEmpty>
                                <CommandGroup className={groupClasses}>
                                    {options.map((o) => (
                                        <CommandItem
                                            value={o}
                                            key={o}
                                            onSelect={(v) => {
                                                let val = options.find((a) => a.toLowerCase() === v);
                                                if (multiple) {
                                                    form.setValue(
                                                        name,
                                                        field.value?.includes(val)
                                                            ? field.value?.filter((l: string) => l !== val)
                                                            : [...field.value, val],
                                                    );
                                                } else {
                                                    form.setValue(name, val as PathValue<T, Path<T>>);
                                                    setOpen(false);
                                                }
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    Boolean(
                                                        multiple
                                                            ? field.value?.includes(o)
                                                            : o === field.value,
                                                    )
                                                        ? "opacity-100"
                                                        : "opacity-0",
                                                )}
                                            />
                                            {displayTransform ? displayTransform(o) : o}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

TaggableComboBox.displayName = "TaggableComboBox";
