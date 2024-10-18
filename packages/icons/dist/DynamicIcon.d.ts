import React from "react";
import type { LucideProps } from "lucide-react";
import type { ValidIconNameDynamicallyGenerated } from "@ulld/utilities/validIconNameList";
export type IconNameList = "bibliography" | "bookmarks" | "bug" | "code" | "data" | "download" | "fitness" | "focus" | "idea" | "important" | "journal" | "latex" | "math" | "paperPdf" | "physics" | "physicsData" | "quicknote" | "readingList" | "recipe" | "researchPapers" | "schedule" | "settings" | "shoppingList" | "snippet" | "tags" | "tech" | "todolist" | "images" | "avatar" | "darktoggle";
declare const logoIconNames: ["css", "github", "jupyter", "kotlin", "markdown", "node", "npm", "python", "react", "swift", "vercel", "youtube", "ulld"];
export type LogoIconNames = (typeof logoIconNames)[number];
export declare enum AllDynamicIconNames {
    bibliography = "bibliography",
    bookmarks = "bookmarks",
    bug = "bug",
    code = "code",
    data = "data",
    download = "download",
    fitness = "fitness",
    focus = "focus",
    idea = "idea",
    important = "important",
    journal = "journal",
    latex = "latex",
    math = "math",
    paperPdf = "paperPdf",
    physics = "physics",
    physicsData = "physicsData",
    quicknote = "quicknote",
    readingList = "readingList",
    recipe = "recipe",
    researchPapers = "researchPapers",
    schedule = "schedule",
    settings = "settings",
    shoppingList = "shoppingList",
    snippet = "snippet",
    tags = "tags",
    tech = "tech",
    todolist = "todolist",
    images = "images",
    avatar = "avatar",
    darktoggle = "darktoggle",
    info = "info",
    note = "note",
    tip = "tip",
    faq = "faq",
    abstract = "abstract",
    todo = "todo",
    success = "success",
    warn = "warn",
    fail = "fail",
    example = "example",
    quote = "quote",
    cite = "cite",
    plain = "plain",
    css = "css",
    github = "github",
    jupyter = "jupyter",
    kotlin = "kotlin",
    markdown = "markdown",
    node = "node",
    npm = "npm",
    python = "python",
    react = "react",
    swift = "swift",
    vercel = "vercel",
    youtube = "youtube",
    ulld = "ulld"
}
export type ValidIconName = ValidIconNameDynamicallyGenerated;
export declare const completeValidIconNameList: readonly string[];
export interface IconProps extends LucideProps {
    name: ValidIconName;
    onLoad?: () => void;
}
export declare const DynamicIcon: (props: IconProps) => React.JSX.Element | null;
export {};
