import type { InternalAppLocation } from "./types";

export const internalAppLocations: InternalAppLocation[] = [
    {
        id: "bookmarks",
        label: "Bookmarks",
        url: "/bookmarks",
        keywords: [],
        defaultIcon: "bookmarks"
    }, 
    {
        id: "internalBibLink",
        label: "Bibliography",
        url: "/bibliography",
        defaultIcon: "library"
    },
    {
        id: "internalNavMenuLink",
        label: "Navigation",
        url: "/navigation",
        defaultIcon: "route",
        isModalRoute: true
    },
    {
        id: "internalTaskManagerLink",
        label: "Task Manager",
        url: "/todo",
        defaultIcon: "todo",
    },
    {
        id: "internalCreateToDoLink",
        label: "Create To Do list",
        url: "/todo/add/list",
        defaultIcon: "pen"
    },
    {
        id: "internalSnippetsLink",
        label: "Snippets",
        url: "/snippets",
        defaultIcon: "code",
    },
    {
        id: "internalAddSnippetLink",
        label: "Add Snippet",
        url: "/snippets/add",
        defaultIcon: "cpu"
    },
    {
        id: "internalEquationsLink",
        label: "Equations",
        url: "/equations",
        defaultIcon: "math",
    },
    {
        id: "internalAddEquationLink",
        label: "Add Equation",
        url: "/equations/add",
        defaultIcon: "equation"
    },
    {
        id: "internalDocsLink",
        label: "Docs",
        url: "/docs",
        defaultIcon: "newspaper",
    },
    {
        id: "internalComponentDocsLink",
        label: "Component Docs",
        url: "/componentDocs",
        defaultIcon: "origami",
    },
    {
        id: "internalDictionaryLink",
        label: "Dictionary",
        url: "/dictionary",
        defaultIcon: "definition",
    },
    {
        id: "internalSettingsLink",
        label: "Settings",
        url: "/settings",
        defaultIcon: "settings",
    },
    {
        id: "internalAutoSettingsLink",
        label: "Auto-Property Settings",
        url: "/settings/autoSettings",
        defaultIcon: "settings"
    },
]
