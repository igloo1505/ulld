"use client";
import React, { useEffect, useState } from "react";
import { staticDocsData } from "#/staticData/docs";
import SidebarDocsCategory from "./category";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { motion } from "framer-motion";
import { ArrowBigLeft as ABL } from "lucide-react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { KeyListItem } from "./types";
import slotMap from "@ulld/utilities/slotMap.json"

const ArrowBigLeft = motion(ABL);

/* const SidebarDocsCategory = motion(SDC); */

declare global {
    interface WindowEventMap {
        "set-docs-back-button-path": CustomEvent<{
            path: string;
        }>;
    }
}


const keyList: KeyListItem[] = [
    {
        pathname: "/docs/user",
        docsKey: "gettingStarted",
        title: "Getting Started",
    },
    {
        pathname: "/docs/user/components",
        docsKey: "categories",
        title: "Components"
    },
    {
        pathname: "/docs/developer",
        docsKey: "developer",
        title: "Developer"
    },
    ...Object.keys(slotMap).map((k) => {
        let _key = k as keyof typeof slotMap
        return {
            pathname: `/docs/developer/slots/${_key}`,
            docsKey: _key,
            title: _key
        }
    })
];

const DocsSidebar = () => {
    const pathname = usePathname();
    const [backButtonPath, setBackButtonPath] = useState("/docs/user");
    const [activeItem, setActiveItem] = useState<
        (typeof keyList)[number] | undefined
    >(keyList.find((f) => f.pathname === pathname));

    useEventListener("set-docs-back-button-path", (e) => {
        setBackButtonPath(e.detail.path);
    });
    const router = useRouter();

    const handleBackClick = () => {
        router.push(backButtonPath);
    };

    useEffect(() => {
        let newItem = keyList.find((f) => pathname === f.pathname);
        setActiveItem(newItem);
        if(newItem && newItem.docsKey && staticDocsData[newItem.docsKey]?.back){
            setBackButtonPath(staticDocsData[newItem.docsKey].back as string)
        } else {
            setBackButtonPath("/docs/user")
        }
    }, [pathname]);

    return (
        <motion.div
            initial={false}
            className={"w-full h-full border-r px-8 pt-8 py-4"}
        /* animate={pathname in keyMap ? keyMap[pathname as keyof typeof keyMap] : "hidden"} */
        >
            <div
                className={"w-full flex flex-row justify-center items-center relative"}
            >
                {pathname !== "/docs/user" && (
                    <ArrowBigLeft
                        role="button"
                        className={clsx(
                            "w-5 h-5 absolute left-2 top-[5px] cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-300",
                        )}
                        onClick={handleBackClick}
                    /* initial={{ */
                    /*     y: -100, */
                    /*     opacity: 0, */
                    /* }} */
                    /* animate={{ */
                    /*     y: 0, */
                    /*     opacity: 1, */
                    /* }} */
                    /* transition={{ */
                    /*     bounce: 0, */
                    /* }} */
                    />
                )}
                <h3 className={"px-12 text-xl mb-6"}>Documentation</h3>
            </div>
            {keyList.map((k) => {
                if (!activeItem || !pathname || (pathname !== k?.pathname)) {
                    return null
                }
                let _key = k.pathname.replaceAll(/[\\|\/|\?]/gm, "")
                return (
                    <SidebarDocsCategory
                        title={k.title}
                        active={pathname === k.pathname}
                        activeItem={activeItem}
                        items={staticDocsData[k.docsKey].items}
                        key={_key}
                        keyId={_key}
                    />
                );
            })}
        </motion.div>
    );
};

DocsSidebar.displayName = "DocsSidebar";

export default DocsSidebar;
