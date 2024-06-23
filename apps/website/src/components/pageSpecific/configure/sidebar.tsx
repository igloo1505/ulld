"use client";
import React, { HTMLProps } from "react";
import { cn } from "@ulld/utilities/cn";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@ulld/tailwind/button";
import Link from "next/link";
import { sidebarNavItems } from "./staticData";

interface ConfigureSidebarProps extends HTMLProps<HTMLElement> {
}

const ConfigureSidebar = ({
    className,
    ...props
}: ConfigureSidebarProps) => {
    const pathname = usePathname();
    return (
        <nav
            className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
                className,
            )}
            {...props}
        >
            {sidebarNavItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        pathname === item.href
                            ? "bg-muted hover:bg-muted"
                            : "hover:bg-transparent hover:underline",
                        "justify-start",
                    )}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    );
};

ConfigureSidebar.displayName = "ConfigureSidebar";

export default ConfigureSidebar;
