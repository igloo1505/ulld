"use client"
import React from "react";
import { SelectOptionWithHref } from "./selectWithHref";
import cn from "@ulld/utilities/cn";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

interface SelectWithHrefItemProps {
    item: SelectOptionWithHref;
    className?: string
    close: () => void
}

const SelectWithHrefItem = ({ item, className, close }: SelectWithHrefItemProps) => {
    return (
        <Link
            data-state={item.active ? "checked" : "unchecked"}
            href={item.href}
            className={cn(
                "group/select-item hover:bg-accent hover:text-accent-foreground transition-colors duration-200 relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                item.active && "active",
                className
            )}
            onClick={close}
        >
            <span
                className={
                    "absolute left-2 h-3.5 w-3.5 items-center justify-center hidden group-[.active]/select-item:flex"
                }
            >
                <CheckIcon className={"h-4 w-4"} />
            </span>
            {item.label}
        </Link>
    );
};

SelectWithHrefItem.displayName = "SelectWithHrefItem";

export default SelectWithHrefItem;
