interface DocCategory {
    label: string;
    href: string;
    id: string
}

interface StaticDocsData {
    docsCategories: DocCategory[];
    categories: string[]
}

export const staticDocsData: StaticDocsData = {
    docsCategories: [
        {
            label: "Getting Started",
            id: "gettingStarted",
            href: "/docs/user"
        },
        {
            label: "Components",
            id: "components",
            href: "/docs/user/components"
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
    ],
} as const;
