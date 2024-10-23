"use client";
import type { CSSProperties, ReactNode} from "react";
import React, { useState } from "react";
import type { FieldValues, Path, PathValue} from "react-hook-form";
import { useFormContext } from "react-hook-form";
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
    PopoverContent,
} from "@ulld/tailwind/popover";
import { cn } from "@ulld/utilities/cn";
import { ChevronsUpDown, Check } from "lucide-react";
import { Button } from "@ulld/tailwind/button";
import { onEnter } from "@ulld/state/listeners/keydown";

export interface Option<J extends string | number> {
    label: string;
    value: J;
}

export interface ComboboxInputProps<
    T extends FieldValues,
    J extends string | number,
    OptionType extends Option<J> = Option<J>
> {
    options: OptionType[];
    name: Path<T>;
    label: ReactNode;
    desc?: ReactNode;
    placeholder?: ReactNode;
    inputPlaceholder?: string;
    notFoundText?: ReactNode;
    onOpenChange?: (isOpen: boolean) => void;
    onSelectOverride?: (val: OptionType | string) => void;
    getPlaceHolder?: (opt: OptionType) => string
    allowOtherInput?: boolean;
    classes?: {
        formItem?: string;
        button?: string;
        popoverContent?: string;
        commandList?: string;
        option?: string;
        notFoundText?: string;
    };
    ids?: {
        popoverContent?: string;
    };
    styles?: {
        popoverContent?: CSSProperties;
        button?: CSSProperties;
    };
}


const PlaceholderComp = <T extends FieldValues, J extends string | number, OptionType extends Option<J> = Option<J>>(props: Pick<ComboboxInputProps<T, J, OptionType>, "placeholder" | "getPlaceHolder"> & {curVal: PathValue<T, Path<T>>, foundOpt?: OptionType}): ReactNode => {
    if(props.curVal){
        if(props.getPlaceHolder && props.foundOpt && typeof props.foundOpt === "string"){
            return props.getPlaceHolder(props.foundOpt)
        }
        if(typeof props.foundOpt === "object" && props.foundOpt.label){
            return props.foundOpt.label
        }
    }
    return props.placeholder
}


export const ComboboxInput = <
    T extends FieldValues,
    J extends string | number,
    OptionType extends Option<J> = Option<J>
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
    allowOtherInput = true,
    onOpenChange,
    onSelectOverride,
    getPlaceHolder
}: ComboboxInputProps<T, J, OptionType>): ReactNode => {
    const form = useFormContext<T>();
    const [open, setOpen] = useState(false);
    const curVal = form.watch(name)

    const foundOpt = curVal ? options.find((item) => item.value === (typeof curVal === "string" ? curVal : curVal.value)) : undefined

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                return (
                    <FormItem className={cn("flex flex-col", classes.formItem)}>
                        <FormLabel>{label}</FormLabel>
                        <Popover
                            onOpenChange={(newOpen) => {
                                if (onOpenChange) {
                                    onOpenChange(newOpen);
                                }
                                setOpen(newOpen);
                            }}
                            open={open}
                        >
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        className={cn(
                                            "w-[200px] justify-between",
                                            !field.value && "text-muted-foreground",
                                            classes.button,
                                        )}
                                        role="combobox"
                                        style={styles?.button}
                                        variant="outline"
                                    >
                                        <div className="flex-grow text-left">
                                            <PlaceholderComp
                                                curVal={curVal}
                                                foundOpt={foundOpt}
                                                getPlaceHolder={getPlaceHolder}
                                                placeholder={placeholder}
                                            />
                                        </div>
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                                className={cn("w-[200px] p-0", classes.popoverContent)}
                                id={ids?.popoverContent}
                                style={styles?.popoverContent}
                            >
                                <Command>
                                    <CommandInput
                                        className="text-foreground"
                                        onKeyDown={(e) => {
                                            if (allowOtherInput) {
                                                onEnter(e, (_e) => {
                                                    if (onSelectOverride) {
                                                        onSelectOverride((_e.target as HTMLInputElement).value);
                                                        setOpen(false); return;
                                                    }
                                                    form.setValue(
                                                        name,
                                                        (_e.target as HTMLInputElement).value as PathValue<
                                                            T,
                                                            Path<T>
                                                        >,
                                                    );
                                                    setOpen(false);
                                                });
                                            }
                                        }}
                                        placeholder={inputPlaceholder}
                                    />
                                    <CommandList className={cn("listyList", classes.commandList)}>
                                        <CommandEmpty className={cn("text-foreground p-2", classes.notFoundText)}>{notFoundText}</CommandEmpty>
                                        <CommandGroup
                                            className={options.length === 0 ? "py-0" : undefined}
                                        >
                                            {options.map((item) => (
                                                <CommandItem
                                                    className={classes.option}
                                                    key={item.value}
                                                    onSelect={() => {
                                                        if (onSelectOverride) {
                                                            onSelectOverride(item);
                                                            setOpen(false); return;
                                                        }
                                                        form.setValue(
                                                            name,
                                                            item.value as PathValue<T, Path<T>>,
                                                        );
                                                        setOpen(false);
                                                    }}
                                                    value={item.label}
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
                            </PopoverContent>
                        </Popover>
                        {desc ? <FormDescription>{desc}</FormDescription> : null}
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
};

ComboboxInput.displayName = "ComboboxInput";
