import { QuickLinkType } from '@ulld/utilities'
import Link from 'next/link'
import React from 'react'



interface FooterCategoryProps {
    items?: QuickLinkType[]
    title: string
}

const FooterLinkItem = ({ item }: { item: QuickLinkType }) => {
    return (
        <Link href={item.href} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">{item.label}</Link>
    )
}

const FooterCategory = ({ items, title }: FooterCategoryProps) => {
    return (
        <div>
            <h3 className="text-gray-700 uppercase dark:text-white">{title}</h3>
            {items && items.map((item, i) => <FooterLinkItem item={item} key={`quick-link-${item.category}-${i}`} />)}
        </div>
    )
}


FooterCategory.displayName = "FooterCategory"


export default FooterCategory;
