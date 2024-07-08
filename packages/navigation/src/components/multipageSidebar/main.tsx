"use client";
import { buttonVariants } from "@ulld/tailwind/button";
import Link from "next/link";
import React from "react";
import { cn } from "@ulld/utilities/cn";
import { usePathname } from "next/navigation";
import { MultipageSidebarProps } from "../../types";

const MultipageSidebar = ({
    className,
    items,
    ...props
}: MultipageSidebarProps) => {
    const pathname = usePathname();
    return (
        <nav
            {...props}
            className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
                className,
            )}
        >
            {items.map((item) => (
                <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        pathname === item.href
                            ? "bg-muted hover:bg-muted"
                            : "hover:bg-transparent hover:underline",
                        "justify-start",
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

MultipageSidebar.displayName = "MultipageSidebar";

export default MultipageSidebar;
