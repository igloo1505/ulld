import NextLink from "next/link";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import { DocsSidebarLink } from "./types";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

const Link = motion(NextLink)

interface SidebarDocsCategoryProps {
    items: DocsSidebarLink[];
    title?: ReactNode;
    keyId: string
}

const linkClassName =
    "w-full text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-1 data-[state=active]:text-foreground";

const SidebarDocsCategory = forwardRef(
    (
        { title, items, keyId }: SidebarDocsCategoryProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const pathname = usePathname()
        const sp = useSearchParams()
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
                                    key={`${keyId}-${i}`}
                                    className={linkClassName}
                                    onClick={c.onClick}
                                    data-state={(pathname === "/docs/user/components" && sp.get("category") === c.label) ? "active" : "inactive"}
                                    initial={{
                                        x: -300,
                                    }}
                                    animate={{
                                        x: 0
                                    }}
                                    exit={{
                                        x: -300
                                    }}
                                    transition={{
                                        delay: i * 0.15
                                    }}
                                >
                                    {c.label}
                                </Link>
                            );
                        } else {
                            return (
                                <motion.a
                                    role="button"
                                    key={`${keyId}-${i}`}
                                    className={linkClassName}
                                    onClick={c.onClick}
                                    data-state={(pathname === "/docs/user/components" && sp.get("category") === c.label) ? "active" : "inactive"}
                                    initial={{
                                        x: -300,
                                    }}
                                    animate={{
                                        x: 0
                                    }}
                                    exit={{
                                        x: -300
                                    }}
                                    transition={{
                                        delay: i * 0.15
                                    }}
                                >
                                    {c.label}
                                </motion.a>
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
