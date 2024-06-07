interface DocCategory {
    label: string;
    href: string;
    id: string;
}

interface StaticDocsData {
    docsCategories: DocCategory[];
    gettingStarted: DocCategory[];
    categories: string[];
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
    ],
} as const;
