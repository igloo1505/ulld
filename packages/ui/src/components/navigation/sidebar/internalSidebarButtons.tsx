import { Route } from "next";
import { SidebarLink } from "./types";
import { syncRootDirectory } from "@ulld/api";
import { toggleDarkMode } from "@ulld/state";
import React from "react";
import { cn } from "../../../utilityFunctions";
import { DynamicIcon, JupyterIcon } from "../..";


/* TODO: Add more useful icons here. Consider making this dynamic in the settings object to make this variable without the need to rebuild. */
export const internalLinks: Record<string, SidebarLink> = {
    darkmode: {
        Icon: ({ className }: { className?: string }) => (
            <a onClick={toggleDarkMode} className={cn("cursor-pointer p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-opacity-10 hover:bg-white bg-primary dark:bg-gray-950 dark:hover:bg-gray-700 text-primary-foreground", className)}>
                <DynamicIcon name={"darktoggle"} className={"w-6 h-6"} />
            </a>
        ),
        label: "Dark Mode"
    },
    equations: {
        Icon: ({ className }: { className: string }) => {
            return <DynamicIcon name="math" className={className} />
        },
        href: "/equations" as Route,
        label: "Equations"
    },
    jupyter: {
        Icon: ({ className }: { className: string }) => {
            return <JupyterIcon className={className} />
        },
        href: "/notebooks" as Route,
        label: "Jupyter"
    },
    snippets: {
        Icon: ({ className }: { className: string }) => {
            return <DynamicIcon name="code-2" className={className} />
        },
        href: "/snippets" as Route,
        label: "Snippets"
    },
    calendar: {
        Icon: ({ className }: { className: string }) => {
            return <DynamicIcon name="calendar" className={className} />
        },
        href: "/calendar?past=true" as Route,
        label: "Calendar"
    },
    syncDir: {
        Icon: "folder-sync",
        onClick: syncRootDirectory,
        label: "Sync"
    },
    settings: {
        Icon: "settings",
        href: "/settings" as Route,
        label: "Settings"
    }
}
