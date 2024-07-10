import { Route } from "next";
import { SidebarLink } from "@ulld/configschema/types";
import {
    toggleDarkMode,
    setPreferFs,
} from "@ulld/state/actions/clientOnly/general";
import { syncRootDirectory } from "@ulld/api/actions/syncing";
import { toggleBookmark } from "@ulld/api/actions/clientOnly/bookmarking";

export type SidebarLinkWithPosition = {
    position: "top" | "bottom"
} & SidebarLink

/* TODO: Add more useful icons here. Consider making this dynamic in the settings object to make this variable without the need to rebuild. */
export const internalLinks = {
    darkMode: {
        icon: "darktoggle",
        onClick: toggleDarkMode,
        label: "Dark Mode",
        position: "bottom"
    } satisfies SidebarLinkWithPosition,
    equations: {
        icon: "math",
        href: "/equations" as Route,
        label: "Equations",
        position: "top"
    } satisfies SidebarLinkWithPosition,
    jupyter: {
        icon: "jupyter",
        href: "/notebooks" as Route,
        label: "Jupyter",
        position: "top"
    } satisfies SidebarLinkWithPosition,
    snippets: {
        icon: "code-2",
        href: "/snippets" as Route,
        label: "Snippets",
        position: "top"
    } satisfies SidebarLinkWithPosition,
    calendar: {
        icon: "calendar",
        href: "/calendar?past=true" as Route,
        label: "Calendar",
        position: "top"
    } satisfies SidebarLinkWithPosition,
    sync: {
        icon: "folder-sync",
        onClick: syncRootDirectory,
        label: "Sync",
        position: "bottom"
    } satisfies SidebarLinkWithPosition,
    settings: {
        icon: "settings",
        href: "/settings" as Route,
        label: "Settings",
        position: "bottom"
    } satisfies SidebarLinkWithPosition,
    preferFileSystemToggle: {
        icon: "file-stack",
        onClick: () => setPreferFs("toggle"),
        label: "File System",
        position: "bottom"
    } satisfies SidebarLinkWithPosition,
    bookmark: {
        icon: "bookmark",
        onClick: () => toggleBookmark(),
        label: "Bookmark",
        position: "top"
    } satisfies SidebarLinkWithPosition
};
