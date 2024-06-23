"use client";
import React, { useEffect, useState } from "react";
import { staticDocsData } from "#/staticData/docs";
import SDC from "./category";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowBigLeft as ABL } from "lucide-react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const ArrowBigLeft = motion(ABL);

const SidebarDocsCategory = motion(SDC);

declare global {
    interface WindowEventMap {
        "set-docs-back-button-path": CustomEvent<{
            path: string;
        }>;
    }
}

const keyMap = {
    "components": "/docs/user/components",
    "home": "/docs/user"
}

const pathKeyMap = {
    [keyMap.home]: "docsHome",
    [keyMap.components]: "components",
};


const allKeys = Object.keys(keyMap)

const DocsSidebar = () => {
    const pathname = usePathname();
    const [activeKey, setActiveKey] = useState(allKeys[0])
    const [backButtonPath, setBackButtonPath] = useState("/docs/user");
    useEventListener("set-docs-back-button-path", (e) => {
        setBackButtonPath(e.detail.path);
    });
    const router = useRouter();

    const handleBackClick = () => {
        router.push(backButtonPath);
    };

    useEffect(() => {
       if(pathname in pathKeyMap){
            setActiveKey(pathKeyMap[pathname])
        } 
    }, [pathname])

    return (
        <motion.div
            initial={false}
            className={"w-full h-full border-r px-8 pt-8 py-4"}
            animate={pathname in keyMap ? keyMap[pathname as keyof typeof keyMap] : "hidden"}
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
            {pathname === keyMap.home && (
                <SidebarDocsCategory
                    title="Getting Started"
                    items={staticDocsData.gettingStarted}
                    key="docsUserHome"
                    keyId={pathKeyMap[keyMap.home]}
                    activeKey={activeKey}
                />
            )}
            {pathname === keyMap.components && (
                <SidebarDocsCategory
                    key="docsComponents"
                    keyId={pathKeyMap[keyMap.components]}
                    title="Components"
                    activeKey={activeKey}
                    items={staticDocsData.categories.map((c) => ({
                        label: c,
                        href: `/docs/user/components?category=${c}`,
                    }))}
                />
            )}
        </motion.div>
    );
};

DocsSidebar.displayName = "DocsSidebar";

export default DocsSidebar;
