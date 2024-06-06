import Link from "next/link";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import { DocsSidebarLink } from "./types";

interface SidebarDocsCategoryProps {
    items: DocsSidebarLink[];
    title?: ReactNode;
}

const linkClassName =
    "w-full text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-2";

const SidebarDocsCategory = forwardRef(
    (
        { title, items }: SidebarDocsCategoryProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        return (
            <div className={"w-full flex flex-col"} ref={ref}>
                {title && <h3>{title}</h3>}
                <div
                    className={
                        "w-full max-w-full flex flex-col justify-start items-center"
                    }
                >
                    {items.map((c, i) => {
                        if (c.href) {
                            return (
                                <Link
                                    href={c.href}
                                    key={i}
                                    className={linkClassName}
                                    onClick={c.onClick}
                                >
                                    {c.label}
                                </Link>
                            );
                        } else {
                            return (
                                <a
                                    role="button"
                                    key={i}
                                    className={linkClassName}
                                    onClick={c.onClick}
                                >
                                    {c.label}
                                </a>
                            );
                        }
                    })}
                </div>
            </div>
        );
    },
);

SidebarDocsCategory.displayName = "SidebarDocsCategory";

export default SidebarDocsCategory;
