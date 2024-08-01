"use client";
import React, { useEffect } from "react";
import { SidebarButton } from "./sidebarButton";
import { internalLinks, SidebarLinkWithPosition } from "./internalSidebarButtons";
const sidebarBreakpoint = 20;
import { InternalNavigationKeys } from "@ulld/configschema/zod/navigationConfig";
import { SecondaryNavigationProps } from "../../types";

interface PermanentSidebarProps extends SecondaryNavigationProps { }

const hoverListener = (e: MouseEvent): void => {
    if (e.pageX <= sidebarBreakpoint) {
        document.body.classList.add("sidebarOpen");
    }
    if (e.pageX > 64) {
        document.body.classList.remove("sidebarOpen");
    }
};

const internalLinkMap: Record<
    InternalNavigationKeys,
    keyof typeof internalLinks
> = {
    darkmodeToggle: "darkMode",
    equationsLink: "equations",
    settings: "settings",
    snippetsLink: "snippets",
    syncLink: "sync",
    fileSystemToggle: "preferFileSystemToggle",
    bookmarkLink: "bookmark",
    backupData: "backup"
};

const PermanentSidebar = ({
    noteTypes,
    navConfig: nav,
}: PermanentSidebarProps) => {
    useEffect(() => {
        window.addEventListener("mousemove", hoverListener);
        return () => {
            window.removeEventListener("mousemove", hoverListener);
        };
    }, []);

    let internalLinkItems: SidebarLinkWithPosition[] = Object.keys(internalLinkMap).map((k) => ({...internalLinks[internalLinkMap[k as keyof typeof internalLinkMap]], include: ["both", "sidebar"].includes(nav[k as keyof typeof nav] as string)})).filter((f) => f.include)

    return (
        <aside
            /* className={ */
                /* "fixed flex flex-col gap-6 items-center w-16 h-screen py-8 overflow-y-auto bg-primary text-primary-content border-r rtl:border-l rtl:border-r-0 dark:bg-gray-950 border-blue-300 dark:border-gray-700 top-0 left-0 -translate-x-full opacity-100 data-sidebar:translate-x-0 data-sidebar:opacity-100 z-[11] dark:text-gray-200" */
            /* } */
            className={"fixed flex flex-col gap-6 items-center w-16 h-screen py-8 overflow-y-auto bg-primary dark:bg-card text-primary-foreground dark:text-card-foreground border-r rtl:border-l rtl:border-r-0 top-0 left-0 -translate-x-full data-sidebar:translate-x-0 z-[11]"}
            id="sidebar-panel"
        >
            <nav className="flex flex-col flex-1 space-y-6">
                {internalLinkItems.filter((l) => l.position === "top").map((l: SidebarLinkWithPosition, i: number) => {
                    return <SidebarButton item={l} key={`sidebar-btn-${i}`} />;
                })}
            </nav>
            <div className="flex flex-col space-y-6">
                {internalLinkItems.filter((l) => l.position === "bottom").map((b: SidebarLinkWithPosition, i: number) => {
                    return <SidebarButton key={`sidebar-btn-${i}`} item={b} />;
                })}
            </div>
        </aside>
    );
};

PermanentSidebar.displayName = "PermanentSidebar";

export default PermanentSidebar;
