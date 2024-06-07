import { ReactNode } from "react";

interface DocCategory {
    label: string;
    href: string;
    id: string;
    back?: {
        path: string
        category: string
    }
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
}

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
            href: "/docs/user/components",
        },
    ],
    categories: [
        "Layout",
        "Plotting",
        "Text",
        "Colors",
        "Linking & Searching",
        "Referencing",
        "Academic",
        "Content Types",
    ],
    terms: [
        {
            label: "Assumed Dimension",
            content: "A number which if greater than 1 is interpreted as pixels, and if less than 1 is interpreted as a proportion of the viewport.",
            id: "assumedDimension"
        }
    ]
} as const;
