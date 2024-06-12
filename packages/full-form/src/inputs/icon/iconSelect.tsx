import { AllDynamicIconNames } from "@ulld/icons";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@ulld/tailwind/form";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
} from "@ulld/tailwind/select";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import React, { ReactNode, useMemo } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import IconSelectOption from "./iconSelectOption";

interface IconSelectProps<T extends FieldValues> {
    name: Path<T>;
    label?: ReactNode;
    placeholder?: string;
    className?: string;
    contentClasses?: string;
    itemClasses?: string;
    desc?: ReactNode;
}

/* TODO: Move this to an infinite list. This is wayyyy too heavy with almost 1000 items. */
export const IconSelect = <T extends FieldValues>({
    name = "icon" as Path<T>,
    label = "Icon",
    className,
    placeholder,
    contentClasses,
    itemClasses,
    desc,
}: IconSelectProps<T>) => {
    const form = useFormContext<T>();

    const options = useMemo(() => {
        let dynamicKeys = Object.keys(dynamicIconImports);
        for (const k in AllDynamicIconNames) {
            if (!dynamicKeys.includes(k)) {
                dynamicKeys.push(k);
            }
        }
        return dynamicKeys.map((i) => {
            return (
                <IconSelectOption
                    item={{
                        value: i,
                        content: i,
                    }}
                    className={itemClasses}
                    onClick={(newValue) =>
                        form.setValue(name as Path<T>, newValue as PathValue<T, Path<T>>)
                    }
                />
            );
        });
    }, [itemClasses, name]);

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <Select
                        /* value={field.value} */
                        onValueChange={(newValue) => {
                            form.setValue(name as Path<T>, newValue as PathValue<T, Path<T>>);
                        }}
                        defaultValue={
                            Array.isArray(field.value)
                                ? `${field.value.length} items`
                                : field.value
                        }
                    >
                        <FormControl>
                            <SelectTrigger className={"[&_svg]:inline [&_svg]:mr-2"}>
                                <SelectValue placeholder={placeholder || undefined} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className={contentClasses}>{options}</SelectContent>
                    </Select>
                    {desc && <FormDescription>{desc}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

IconSelect.displayName = "IconSelect";
