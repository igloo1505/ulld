"use client";
import React, { useState } from "react";
import { sidebarNavItems } from "./staticData";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@ulld/tailwind/select";

interface ConfigureFormMobileDropdownProps { }

const ConfigureFormMobileDropdown = (
    props: ConfigureFormMobileDropdownProps,
) => {
    const bp = useMediaQuery({
        maxWidth: 680,
    });
    const [open, setOpen] = useState(false);
    if (!bp) {
        return null;
    }
    return (
        <Select open={open} onOpenChange={setOpen}>
            <SelectTrigger>
                <SelectValue placeholder="Page" />
            </SelectTrigger>
            <SelectContent>
                {sidebarNavItems.map((x) => {
                    return (
                        <Link
                            href={x.href}
                            onClick={() => setOpen(false)}
                            className={
                                "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                            }
                        >
                            {x.title}
                        </Link>
                    );
                })}
            </SelectContent>
        </Select>
    );
};

ConfigureFormMobileDropdown.displayName = "ConfigureFormMobileDropdown";

export default ConfigureFormMobileDropdown;
