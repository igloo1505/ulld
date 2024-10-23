import type { SidebarLink } from "../../pages/settingPage/form/schema";


export type InternalLinks = {
    [K in string]: SidebarLink & {
        status?: "beta" | "experimental" | "internal"
    }
}

/* RESUME: Come back here and remove this object, and use only the object that's being dynamically generated now. */
/* TODO: Add more useful icons here. Consider making this dynamic in the settings object to make this variable without the need to rebuild. */
export const internalLinks: InternalLinks = {
    darkMode: {
        icon: "darktoggle",
        fieldType: "action",
        value: "toggleDarkMode",
        label: "Dark Mode",
        position: "bottom"
    },
    equations: {
        icon: "math",
        fieldType: "url",
        value: "/equations",
        label: "Equations",
        position: "top"
    },
    jupyter: {
        icon: "jupyter",
        fieldType: "url",
        value: "/notebooks",
        label: "Jupyter",
        position: "top"
    },
    snippets: {
        icon: "square-code",
        fieldType: "url",
        value: "/snippets",
        label: "Snippets",
        position: "top"
    },
    calendar: {
        icon: "calendar",
        fieldType: "url",
        status: "experimental",
        value: "/calendar?past=true",
        label: "Calendar",
        position: "top"
    },
    sync: {
        icon: "folder-sync",
        fieldType: "action",
        value: "syncRootDirectory",
        label: "Sync",
        position: "bottom"
    },
    settings: {
        icon: "settings",
        fieldType: "url",
        value: "/settings",
        label: "Settings",
        position: "bottom"
    },
    preferFileSystemToggle: {
        icon: "file-stack",
        fieldType: "action",
        value: "togglePreferFileSystem",
        label: "File System",
        position: "bottom"
    },
    bookmark: {
        icon: "bookmark",
        fieldType: "action",
        value: "toggleBookmarked",
        label: "Bookmark",
        position: "top"
    },
    /* backup: { */
    /*     icon: "database-backup", */
    /*     fieldType: "action", */
    /*     label: "Backup", */
    /*     position: "bottom" */
    /* } */
};

