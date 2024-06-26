import NextLink from "next/link";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import { KeyListItem, ValidDocKeyValue } from "./types";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

const Link = motion(NextLink);

interface SidebarDocsCategoryProps {
    items: ValidDocKeyValue["items"];
    title?: ReactNode;
    keyId: string;
    activeItem?: KeyListItem
    active: boolean
}

const linkClassName =
    "w-full text-muted-foreground hover:text-foreground transition-colors duration-300 px-3 py-1 data-[state=active]:text-foreground";

const initialDelay = 0.5;

const SidebarDocsCategory = forwardRef(
    (
        { title, items, keyId, active, activeItem }: SidebarDocsCategoryProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        console.log("active, title: ", active, title)
        const sp = useSearchParams()
        const pathname = usePathname()
        console.log("items: ", items)
       const cat = sp.get("category")
        /* const dataState = ; */
        return (
            <motion.div
                ref={ref}
                className={"w-full flex flex-col justify-start items-center"}
                /* animate={activeKey === keyId ? "show" : "hidden"} */
            >
                {title && (
                    <motion.h3
                        className={"w-full"}
                    /* initial={{ */
                    /*     opacity: 0, */
                    /*     scale: 1, */
                    /* }} */
                    /* variants={{ */
                    /*     hidden: { */
                    /*         opacity: 0, */
                    /*         scale: 1, */
                    /*     }, */
                    /*     show: { */
                    /*         opacity: 1, */
                    /*     }, */
                    /* }} */
                    >
                        {title}
                    </motion.h3>
                )}
                {items.map((c, i) => {
                    if (c.href) {
                        return (
                            <Link
                                href={c.href}
                                key={`${keyId}-${i}`}
                                className={linkClassName}
                                onClick={c.onClick}
                                data-state={cat ? ("activeKey" in c && cat === c.activeKey) ? "active" : "inactive" : ("getActive" in c && c.getActive) ? c.getActive(pathname) : "inactive"}
                            /* initial={{ */
                            /*     x: -300, */
                            /* }} */
                            /* variants={{ */
                            /*     hidden: { */
                            /*         opacity: 0, */
                            /*         x: 100, */
                            /*         /* : 1, */
                            /*     }, */
                            /*     show: { */
                            /*         x: 0, */
                            /*         transition: { */
                            /*             delay: initialDelay + 0.15 * i, */
                            /*         }, */
                            /*     }, */
                            /* }} */
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
                                data-state={cat ? ("activeKey" in c && cat === c.activeKey) ? "active" : "inactive" : ("getActive" in c && c.getActive) ? c.getActive(pathname) : "inactive"}
                            /* initial={{ */
                            /*     x: -300, */
                            /* }} */
                            /* variants={{ */
                            /*     hidden: { */
                            /*         opacity: 0, */
                            /*         x: 100, */
                            /*         /* : 1, */
                            /*     }, */
                            /*     show: { */
                            /*         x: 0, */
                            /*         transition: { */
                            /*             delay: initialDelay + 0.15 * i, */
                            /*         }, */
                            /*     }, */
                            /* }} */
                            >
                                {c.label}
                            </motion.a>
                        );
                    }
                })}
            </motion.div>
        );
    },
);

SidebarDocsCategory.displayName = "SidebarDocsCategory";

export default SidebarDocsCategory;
