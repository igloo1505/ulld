import React, { useState } from "react";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@ulld/tailwind/select";
import SelectWithHrefItem from "./selectWithIconItem";

export type SelectOptionWithHref = {
    value: string;
    label: string;
    href: string;
    active?: boolean;
};

export interface SelectWithHrefProps {
    items: SelectOptionWithHref[];
    placeholder?: string;
    classes?: {
        trigger?: string;
        container?: string
        item?: string
    };
}

const SelectWithHref = ({
    items,
    placeholder,
    classes = {},
}: SelectWithHrefProps) => {
    const [open, setOpen] = useState(false)
    return (
        <Select 
            open={open}
            onOpenChange={setOpen}
        >
            <SelectTrigger
                className={classes.trigger}
            >
                <SelectValue
                    placeholder={placeholder}
                />
            </SelectTrigger>
            <SelectContent
                className={classes.container}
            >
                {items.map((t) => {
                    return (
                    <SelectWithHrefItem
                            close={() => setOpen(false)}
                            item={t}
                            className={classes.item}
                        />
                    );
                })}
            </SelectContent>
        </Select>
    );
};

SelectWithHref.displayName = "SelectWithHref";

export default SelectWithHref;
