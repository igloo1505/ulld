import type { NavbarLink, SidebarLink } from "@ulld/types"


export interface InitialSeedData {
    navigation: {
        settings: {
            sidebarLinks: (SidebarLink<"action"> | SidebarLink<"url">)[]
            navbarLinks: NavbarLink[]
        }
    }
}


export const initialSeedData: InitialSeedData = {
    navigation: {
        settings: {
            sidebarLinks: [
                {
                    fieldType: "url",
                    value: "/settings",
                    label: "Settings",
                    position: "bottom",
                    icon: "settings"
                },
                {
                    fieldType: "action",
                    value: "syncRootDirectory",
                    icon: "folder-sync",
                    label: "Sync",
                    position: "bottom"
                },
                {
                    fieldType: "url",
                    value: "/bibliography",
                    icon: "bibliography",
                    label: "Bibliography",
                    position: "top"
                },
                {
                    fieldType: "url",
                    value: "/snippets",
                    icon: "snippet",
                    label: "Snippets",
                    position: "top"
                },
                {
                    fieldType: "url",
                    value: "/equations",
                    icon: "equation",
                    label: "Equations",
                    position: "top"
                },
                {
                    fieldType: "url",
                    value: "/todo",
                    icon: "todo",
                    label: "Task Manager",
                    position: "top"
                },
            ],
            navbarLinks: [
                {
                    fieldType: "url",
                    label: "Bookmarks",
                    value: "/bookmarks"
                }
            ]
        }
    }
}
