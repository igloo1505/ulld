"use client"
import dynamic from "next/dynamic";
import React, { useEffect, useMemo } from "react";
import type { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import type { ValidIconNameDynamicallyGenerated } from "@ulld/utilities/validIconNameList"


export type IconNameList =
    | "bibliography"
    | "bookmarks"
    | "bug"
    | "code"
    | "data"
    | "download"
    | "fitness"
    | "focus"
    | "idea"
    | "important"
    | "journal"
    | "latex"
    | "math"
    | "paperPdf"
    | "physics"
    | "physicsData"
    | "quicknote"
    | "readingList"
    | "recipe"
    | "researchPapers"
    | "schedule"
    | "settings"
    | "shoppingList"
    | "snippet"
    | "tags"
    | "tech"
    | "todolist"
    | "images"
    | "avatar"
    | "darktoggle";

const logoIconNames = [
    "css",
    "github",
    "jupyter",
    "kotlin",
    "markdown",
    "node",
    "npm",
    "python",
    "react",
    "swift",
    "vercel",
    "youtube",
    "ulld"
] as const satisfies ValidIconNameDynamicallyGenerated[number][]

export type LogoIconNames = (typeof logoIconNames)[number];

/// NOTE: AdmonitionType, LocoIconNames & IconNameList
export enum AllDynamicIconNames {
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
    ulld = "ulld",
}

const iconNameMap: {
    [k in ValidIconNameDynamicallyGenerated]?: keyof typeof dynamicIconImports | false;
} = {
    plain: false,
    bibliography: "library",
    bookmarks: "bookmark",
    bug: "bug",
    code: "code",
    data: "database",
    download: "folder-down",
    fitness: "dumbbell",
    focus: "glasses",
    idea: "lightbulb",
    important: "circle-alert",
    journal: "pencil-line",
    latex: "square-function",
    math: "sigma",
    paperPdf: "file-text",
    physics: "atom",
    physicsData: "chart-bar-big",
    quicknote: "sticky-note",
    readingList: "book-open-check",
    recipe: "utensils",
    researchPapers: "microscope",
    schedule: "calendar-check",
    settings: "settings",
    shoppingList: "shopping-basket",
    snippet: "terminal",
    tags: "hash",
    tech: "cpu",
    todolist: "list-todo",
    darktoggle: "moon-star",
    images: "image",
    avatar: "circle-user-round",
    info: "info",
    note: "pen",
    tip: "hand",
    faq: "circle-help",
    abstract: "scroll-text",
    todo: "list-todo",
    success: "thumbs-up",
    warn: "triangle-alert",
    fail: "thumbs-down",
    example: "microscope",
    quote: "quote",
    cite: "book-marked",
    equation: "variable",
    definition: "book",
    practice: "chart-line",
};

export type ValidIconName = ValidIconNameDynamicallyGenerated

export const completeValidIconNameList = [
    ...Object.keys(iconNameMap),
    ...Object.keys(AllDynamicIconNames),
    ...Object.keys(dynamicIconImports),
] as const;

export interface IconProps extends LucideProps {
    name: ValidIconName;
    onLoad?: () => void
}

export const DynamicIcon = (props: IconProps) => {
    const name = String(props.name)
    let iconType: "logo" | "lucide" | null = null;
    if (logoIconNames.includes(name as (typeof logoIconNames)[number])) {
        iconType = "logo";
    }
    let _name =
        name in iconNameMap ? iconNameMap[name as keyof typeof iconNameMap] : name;
    if (!iconType && _name && Object.keys(dynamicIconImports).includes(_name)) {
        iconType = "lucide";
    }
    useEffect(() => {
       if(props.onLoad){
            props.onLoad()
        } 
    }, [])
    return useMemo(() => {
        if (!iconType) return null;
        if (iconType === "logo") {
            let Icon = dynamic(() => import(`./logoIcons/${name}`));
            return <Icon {...props} />;
        } else {
            const LucideIcon = dynamic(
                dynamicIconImports[_name as keyof typeof dynamicIconImports],
            );
            return <LucideIcon {...props} />;
        }
    }, [name]);
};
