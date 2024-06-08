import { ReactNode } from "react";


interface ExtendsProps {
    label: string
    href: string
}

interface DocCategory {
    label: string;
    href: string;
    id: string;
    back?: {
        path: string
        category: string
    };
}

interface Term {
   label: string
    content: ReactNode
    id: string
}

interface StaticDocsData {
    gettingStarted: DocCategory[];
    categories: string[];
    terms: Term[]
    extendsMap: Record<string, ExtendsProps>
}

const docCategories = [
        "Layout",
        "Text",
        "Linking & Searching",
        "Referencing",
        "Colors",
        "Plotting",
        "Academic",
        "Content Types",
        "Interactivity",
]

const initalCategorySearchParam = new URLSearchParams()
initalCategorySearchParam.set("category", docCategories[0])



export const staticDocsData: StaticDocsData = {
    gettingStarted: [
        {
            label: "Intro to Jsx",
            id: "introToJsx",
            href: "/docs/user/introToJsx",
        },
        {
            label: "Configure",
            id: "configure",
            href: "/configure",
        },
        {
            label: "Syntax",
            id: "syntax",
            href: "/docs/user/syntax",
        },
        {
            label: "Components",
            id: "components",
            href: `/docs/user/components?${initalCategorySearchParam.toString()}`,
        },
    ],
    categories: docCategories,
    terms: [
        {
            label: "Assumed Dimension",
            content: "A number which if greater than 1 is interpreted as pixels, and if less than 1 is interpreted as a proportion of the viewport.",
            id: "assumedDimension"
        }
    ],
    extendsMap: {
       "colorProps": {
            href: "/docs/user/components?category=Colors#colorproperties",
            label: "Color Properties"
        }
    }
} as const;
