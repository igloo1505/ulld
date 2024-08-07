import { ulldDefaultColorThemes } from "@ulld/utilities/defaultColorThemeList"

export enum pages {
    searchEquations = "searchEquations",
    searchDefinitions = "searchDefinitions",
    searchNotes = "searchNotes",
    searchTags = "searchTags",
    searchSubjects = "searchSubjects",
    fullTextSearch = "fullTextSearch",
    searchByValue = "searchByValue",
    switchTheme = "switchTheme",
    searchToDoLists = "searchToDoLists"
}

export enum textSearchPages {
    fullTextSearch = pages.fullTextSearch,
    searchByValue = pages.searchByValue
}



export const pageMap: Partial<{ [k in pages]: string }> = {
    searchNotes: "Notes",
    searchEquations: "Equations",
    searchTags: "Tags"
}


export const sideBySidePages: pages[] = [
    pages.searchEquations,
    pages.searchDefinitions
]


export const mathPanelPages: pages[] = [
    pages.searchEquations
]

export const mdxPanelPages: pages[] = [
    pages.searchDefinitions
]
