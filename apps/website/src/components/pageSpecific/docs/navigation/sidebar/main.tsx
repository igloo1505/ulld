"use client";
import React, { useEffect, useState } from "react";
import { staticDocsData } from "#/staticData/docs";
import SDC from "./category";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const SidebarDocsCategory = motion(SDC);

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "set-docs-category": CustomEvent<{
            docsCategory: (typeof staticDocsData.docsCategories)[number];
        }>;
    }
}



/* const sendCategoryChangeEvent = ( */
/*     category: (typeof docData.docsCategories)[number], */
/* ) => () => { */
/*     window.dispatchEvent( */
/*         new CustomEvent("set-docs-category", { */
/*             detail: { */
/*                 docsCategory: category, */
/*             }, */
/*         }), */
/*     ); */
/* }; */




const DocsSidebar = () => {
    const pathname = usePathname()
    const [docsCategory, setDocsCategory] = useState(staticDocsData.docsCategories.find((f) => f.href === pathname));
    useEventListener("set-docs-category", (e) =>
        setDocsCategory(e.detail.docsCategory),
    );
    useEffect(() => {
       setDocsCategory(staticDocsData.docsCategories.find((f) => f.href === pathname)) 
    }, [pathname])
    const router = useRouter();

    const handleBackClick = () => {
        if (docsCategory) {
            router.push("/docs");
            setDocsCategory(undefined)
        }
    };

    return (
        <div className={"w-full h-full border-r px-8 pt-8 pb-4"}>
            <div
                className={"w-full flex flex-row justify-center items-center relative"}
            >
                <ArrowLeftIcon
                    role="button"
                    className={clsx(
                        "w-4 h-4 absolute left-4 top-[50%] translate-y-[-50%] transition-all duration-300 cursor-pointer",
                        pathname === "/docs"
                            ? "scale-0 opacity-0"
                            : "scale-100 opacity-100",
                    )}
                    onClick={handleBackClick}
                />
                <h3 className={"px-12 text-xl"}>Documentation</h3>
            </div>
            <AnimatePresence>
                {pathname === "/docs" && (
                    <SidebarDocsCategory items={staticDocsData.docsCategories} />
                )}
                {docsCategory?.id === "components" && (
                    <SidebarDocsCategory
                        title="Components"
                        items={staticDocsData.categories.map((c) => ({
                            label: c,
                            href: `/docs?category=${c}`,
                        }))}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

DocsSidebar.displayName = "DocsSidebar";

export default DocsSidebar;
