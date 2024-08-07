import { syncRootDirectory } from "@ulld/api/actions/syncing";
import { client } from "@ulld/api/client";
import { DocumentTypeConfig } from "@ulld/configschema/zod/documentConfigSchema";
import { toggleToolTips } from "@ulld/state/actions/clientOnly/dom";
import {
    setPreferFs,
    toggleDarkMode,
    toggleAllJupyterFolds,
    enterIdSelectMode,
    toggleEquationSelectMode,
} from "@ulld/state/actions/clientOnly/general";
import { showToast } from "@ulld/state/slices/ui";
import { Route } from "next";
import { CommandPaletteItemProps } from "../commandItem";
import { pages, textSearchPages } from "../commandPaletteUtilities";
import { utilityNavLinks } from "@ulld/utilities/utilNavLinks";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";


export const filterItems: string[] = [
    "snippets",
    "addSnippets",
    "settings",
    "bibliography",
];


interface CmdPaletteItem
    extends Omit<
        CommandPaletteItemProps,
        "activePage" | "close" | "children" | "value"
    > {
    label: string;
    value: string;
}


let factions = (config: AppConfigSchemaOutput): (CmdPaletteItem | false)[] => {
    return config.noteTypes.map(
        (l: DocumentTypeConfig): CmdPaletteItem | false => {
            if (!l.label || !l.url) return false;
            return {
                onSelect: () => (window.location.pathname = l.url),
                href: l.url,
                label: l.label,
                value: l.label,
                keywords: l?.keywords?.join(" ") || "",
            };
        },
    );
};


export const formattedActions = (
    config: AppConfigSchemaOutput,
): CmdPaletteItem[] => {
    return factions(config).filter((a) => a) as CmdPaletteItem[];
};


export const getDefaultCommandList = (
    config: AppConfigSchemaOutput,
): CmdPaletteItem[] => {
    return [
        {
            onSelect: async () => await setPreferFs("toggle"),
            label: "Toggle Prefer File System",
            value: "togglepreferfilesystem",
        },
        {
            value: "/flipCard/add",
            onSelect: { push: "/flipCard/add" },
            label: "Add flipcard",
        },
        {
            value: "/flipCard",
            onSelect: { push: "/flipCard" },
            label: "QA flipcard exam test",
        },
        {
            value: "/practiceExam",
            onSelect: { push: "/practiceExam" },
            label: "Practice Exam",
        },
        {
            onSelect: () => toggleToolTips(),
            label: "Toggle Tooltips",
            value: "toggletooltips",
        },
        {
            onSelect: async () => syncRootDirectory(),
            label: "Sync Notes",
            value: "syncnotes",
        },
        {
            onSelect: () => toggleDarkMode(),
            label: "Toggle Dark Mode",
            value: "toggledarkmode",
        },
        {
            onSelect: () => toggleAllJupyterFolds(),
            label: "Toggle Jupyter Folds",
            value: "togglejupyterfolds",
        },
        {
            isParent: true,
            value: pages.searchNotes,
            label: "Search Notes",
        },
        {
            isParent: true,
            label: "Search Equations",
            value: pages.searchEquations,
        },
        {
            isParent: true,
            label: "Switch Theme",
            value: pages.switchTheme,
        },
        {
            isParent: true,
            label: "Search Tags",
            value: pages.searchTags,
        },
        {
            isParent: true,
            label: "Search Subjects",
            value: pages.searchSubjects,
        },
        {
            isParent: true,
            label: "Search Definitions",
            value: pages.searchDefinitions,
        },
        {
            isParent: true,
            isEmptyParent: true,
            isTextSearch: true,
            label: "Search By Value",
            value: textSearchPages.searchByValue,
        },
        {
            isParent: true,
            isEmptyParent: true,
            isTextSearch: true,
            label: "Full Text Search",
            value: textSearchPages.fullTextSearch,
            keymap: ["t", "e"],
        },
        {
            keymap: ["t", "i"],
            onSelect: enterIdSelectMode,
            label: "ID Select Mode",
            value: "toggleidselect",
        },
        {
            label: "Show Equation Id's",
            onSelect: () => toggleEquationSelectMode(),
            value: "showequationids",
        },
        {
            label: "Show Navigation Menu",
            onSelect: { push: "/navigation" },
            value: "shownavmenu",
        },
        {
            label: "Backup Non-Filesystem",
            onSelect: async () => {
                await client.sync.backupNonFileSystemDB.mutate();
                showToast({
                    title: "Success",
                    description:
                        "Data that can not be re-generated from the filesystem has been backed up successfully.",
                });
            },
            value: "backupdbonly",
        },
        {
            label: "Create new To-Do list",
            onSelect: { push: "/todo/add/list" as Route },
            value: "createNewToDoList",
        },
        {
            label: "Add new To-Do",
            onSelect: { push: "/todo/add/task" as Route },
            value: "createNewToDoTask",
        },
        {
            isParent: true,
            // isEmptyParent: true,
            // isTextSearch: true,
            label: "Search To Do's",
            value: pages.searchToDoLists,
            // keymap: ["t", "e"]
        },
        ...formattedActions(config).map((item) => {
            return {
                label: item.label,
                value: item.href || item.label,
                onSelect: { push: item.href as Route },
            };
        }),
        ...utilityNavLinks.map((u) => {
            return {
                value: u.url,
                onSelect: { push: u.url as Route },
                label: u.label,
            };
        }),
    ];
};
