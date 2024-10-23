"use client";
import type { ReactNode} from "react";
import React, { useEffect } from "react";
import type { SecondaryNavigationProps } from "../../types";
import type { SidebarLink } from "../../pages/settingPage/form/schema";
import { SidebarButton } from "./sidebarButton";
import type { SortedSidebarLinks } from "./types";

const sidebarBreakpoint = 20;

export interface PermanentSidebarProps extends SecondaryNavigationProps {
    sidebarLinks: SortedSidebarLinks
}

const hoverListener = (e: MouseEvent): void => {
    if (e.pageX <= sidebarBreakpoint) {
        document.body.classList.add("sidebarOpen");
    }
    if (e.pageX > 64) {
        document.body.classList.remove("sidebarOpen");
    }
};


const PermanentSidebar = ({
    sidebarLinks
}: PermanentSidebarProps): ReactNode => {
    useEffect(() => {
        window.addEventListener("mousemove", hoverListener);
        return () => {
            window.removeEventListener("mousemove", hoverListener);
        };
    }, []);

    return (
        <div
            className="fixed flex flex-col gap-6 items-center w-16 h-screen py-8 overflow-y-auto bg-primary dark:bg-card text-primary-foreground dark:text-card-foreground border-r rtl:border-l rtl:border-r-0 top-0 left-0 -translate-x-full data-sidebar:translate-x-0 z-[11]"
            id="sidebar-panel"
        >
            <nav className="flex flex-col flex-1 space-y-6">
                {sidebarLinks.top.map((l: SidebarLink) => {
                    return <SidebarButton item={l} key={`sidebar-btn-${l.label || l.value || l.position}`} />;
                })}
            </nav>
            <div className="flex flex-col space-y-6">
                {sidebarLinks.bottom.map((b: SidebarLink) => {
                    return <SidebarButton item={b} key={`sidebar-btn-${b.label || b.value || b.position}`} />;
                })}
            </div>
        </div>
    );
};

PermanentSidebar.displayName = "PermanentSidebar";

export default PermanentSidebar;
