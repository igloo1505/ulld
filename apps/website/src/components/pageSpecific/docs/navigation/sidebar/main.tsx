"use client";
import React, { useEffect, useState } from "react";
import { staticDocsData } from "#/staticData/docs";
import SDC from "./category";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowBigLeft as ABL } from "lucide-react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const ArrowBigLeft = motion(ABL)

const SidebarDocsCategory = motion(SDC);

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "set-docs-category": CustomEvent<{
            docsCategory: (typeof staticDocsData.docsCategories)[number];
        }>;

        "set-docs-back-button-path": CustomEvent<{
            path: string
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
    const [backButtonPath, setBackButtonPath] = useState("/docs")
    useEventListener("set-docs-category", (e) =>
        setDocsCategory(e.detail.docsCategory),
    );
    useEventListener("set-docs-back-button-path", (e) => {
        setBackButtonPath(e.detail.path)
    })
    useEffect(() => {
       setDocsCategory(staticDocsData.docsCategories.find((f) => f.href === pathname)) 
    }, [pathname])
    const router = useRouter();

    const handleBackClick = () => {
        if (docsCategory) {
            router.push(backButtonPath);
            setDocsCategory(undefined)
        }
    };

    return (
        <div className={"w-full h-full border-r px-8 pt-8 py-4"}>
            <div
                className={"w-full flex flex-row justify-center items-center relative"}
            >
                {pathname !== "/docs" && <ArrowBigLeft
                    role="button"
                    className={clsx(
                        "w-6 h-6 absolute left-2 top-[3px] cursor-pointer",
                    )}
                    onClick={handleBackClick}
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                />}
                <h3 className={"px-12 text-xl pb-3"}>Documentation</h3>
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
                            href: `/docs/user/components?category=${c}`,
                        }))}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

DocsSidebar.displayName = "DocsSidebar";

export default DocsSidebar;
