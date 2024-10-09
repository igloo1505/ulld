"use client"
import {
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import React, { ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@ulld/tailwind/popover";
import cn from "@ulld/utilities/cn";
import { Button } from "@ulld/tailwind/button";
import IconList from "./iconList";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
} from "@ulld/tailwind/drawer";
import PlaceHolder from "./placeholder";

interface IconInputProps<T extends FieldValues> {
    name: Path<T>;
    label?: ReactNode;
    placeholder?: string;
    searchPlaceholder?: string;
    desc?: ReactNode;
    classes?: {
        popover?: string;
        drawerContent?: string;
        item?: string;
        button?: string;
        icon?: string;
    };
}

export const IconInput = <T extends FieldValues>({
    name = "icon" as Path<T>,
    label = "Icon",
    placeholder,
    desc,
    classes = {},
    searchPlaceholder,
}: IconInputProps<T>) => {
    const form = useFormContext<T>();
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery({
        minWidth: 768
    });

    const iconValue = form.watch(name);

    if (isDesktop) {
        return (
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>{label}</FormLabel>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn("w-[350px] justify-start", classes.button)}
                                >
                                    <PlaceHolder
                                        open={open}
                                        iconClasses={classes.icon}
                                        value={iconValue}
                                        placeholder={placeholder}
                                    />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className={cn("w-[350px] p-0", classes.popover)}
                                align="start"
                            >
                                <IconList
                                    iconClasses={cn("text-foreground", classes.icon)}
                                    setValue={(newVal) =>
                                        form.setValue(
                                            name as Path<T>,
                                            newVal as PathValue<T, Path<T>>,
                                        )
                                    }
                                    setOpen={setOpen}
                                    placeholder={searchPlaceholder}
                                    className={classes.item}
                                />
                            </PopoverContent>
                        </Popover>
                        {desc && <FormDescription>{desc}</FormDescription>}
                        <FormMessage />
                    </FormItem>
                )}
            />
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant="outline"
                    className={cn("w-[350px] justify-start", classes.button)}
                >
                    <PlaceHolder
                        open={open}
                        iconClasses={classes.icon}
                        value={iconValue}
                        placeholder={placeholder}
                    />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className={cn("mt-4 p-4 border-t", classes.drawerContent)}>
                    <IconList
                        iconClasses={classes.icon}
                        setValue={(newVal) =>
                            form.setValue(name as Path<T>, newVal as PathValue<T, Path<T>>)
                        }
                        setOpen={setOpen}
                        className={classes.item}
                        placeholder={searchPlaceholder}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
};

IconInput.displayName = "IconInput";
