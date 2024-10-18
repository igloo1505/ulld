import type { QuickLinkType } from "@ulld/utilities/types";
import Link from "next/link";
import type { ReactNode } from "react";
import React from "react";

interface FooterCategoryProps {
    items: QuickLinkType[];
    title: string;
}


const FooterLinkItem = ({ item }: { item: QuickLinkType }): ReactNode => {
    return (
        <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" href={item.href}>{item.label}</Link>
    )
}

const FooterCategory = ({ items = [], title }: FooterCategoryProps): ReactNode => {
    return (
        <div>
            <h3 className="text-gray-700 uppercase dark:text-white">{title}</h3>
            {items.map((item) => (
                    <FooterLinkItem
                        item={item}
                        key={`quick-link-${item.category}-${item.label}`}
                    />
                ))}
        </div>
    );
};

FooterCategory.displayName = "FooterCategory";

export default FooterCategory;
