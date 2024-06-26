import {
    DocCategory,
    DocsSidebarLink,
    DocWithBack,
    WithBack,
} from "#/components/pageSpecific/docs/navigation/sidebar/types";
import { ReactNode } from "react";
import slotMap from "@ulld/utilities/slotMap.json";

interface ExtendsProps {
    label: string;
    href: string;
}

export interface Term {
    label: string;
    content: ReactNode;
    id: string;
}

type SlotMapItems = {
    [k in keyof typeof slotMap]: {
        back: string;
        items: DocWithBack[];
    };
};


interface StaticDocsData extends SlotMapItems {
    gettingStarted: {
        back?: string;
        items: DocCategory[];
    };
    categories: WithBack<DocsSidebarLink[]>;
    developer: WithBack<DocsSidebarLink[]>;
    terms: Term[];
    slots: WithBack<DocsSidebarLink[]>;
    extendsMap: Record<string, ExtendsProps>;
}

const docCategories = [
    "Layout",
    "Text",
    "Referencing",
    "Colors",
    "Plotting",
    "Academic",
    "Content Types",
    "Interactivity",
];

let _slotMapSidebar: SlotMapItems = {} as SlotMapItems;

for (const k in slotMap) {
    if (!_slotMapSidebar[k as keyof SlotMapItems]) {
        _slotMapSidebar[k as keyof SlotMapItems] = {
            back: "/docs/developer/slots",
            items: [] as SlotMapItems[keyof SlotMapItems]["items"],
        };
    }
    for (const l in slotMap[k as keyof SlotMapItems]) {
        _slotMapSidebar[k as keyof SlotMapItems].items.push({
            label: l,
            href: `/docs/developer/slots/${k}/${l}`,
            id: `slot-${k}-${l}`,
            back: `/docs/developer/slots`,
        });
    }
}

const slots: StaticDocsData["slots"] = {
    back: "/docs/developer",
    items: Object.keys(slotMap).map((k) => {
        return {
            label: k,
            href: `/docs/developer/slots/${k}`,
        };
    }),
};

const initalCategorySearchParam = new URLSearchParams();
initalCategorySearchParam.set("category", docCategories[0]);

export const staticDocsData: StaticDocsData = {
    gettingStarted: {
        items: [
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
                label: "Front Matter",
                id: "frontMatter",
                href: "/docs/user/frontMatter",
            },
            {
                label: "Components",
                id: "components",
                href: `/docs/user/components?${initalCategorySearchParam.toString()}`,
            },
        ],
    },
    developer: {
        items: [
            {
                label: "Slots",
                href: "/docs/developer/slots",
            },
        ],
    },
    categories: {
        items: docCategories.map((c) => ({
            label: c,
            href: `/docs/user/components?category=${c}`,
        })),
    },
    slots,
    ..._slotMapSidebar,
    terms: [
        {
            label: "Assumed Dimension",
            content:
                "A number which if greater than 1 is interpreted as pixels, and if less than 1 is interpreted as a proportion of the viewport.",
            id: "assumedDimension",
        },
        {
            label: "Root Relative Path",
            content: (
                <>
                    A file path as it appears from the root of your{" "}
                    <span className={"italic"}>notes</span> directory.
                </>
            ),
            id: "rootRelativePath",
        },
    ],
    extendsMap: {
        colorProps: {
            href: "/docs/user/components?category=Colors#colorproperties",
            label: "Color Properties",
        },
        tooltipProps: {
            href: "/docs/user/components?category=Interactivity#withtooltipwrapper",
            label: "Tooltip Wrapper",
        },
    },
} as const;
