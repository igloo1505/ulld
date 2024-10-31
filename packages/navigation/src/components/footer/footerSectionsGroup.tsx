import type { QuickLinkType } from '@ulld/utilities/types';
import React, { type ReactNode } from 'react'
import Link from 'next/link';
import FooterCategory from './footerCategory';

export type GroupedFooterLinks = Record<
    string,
    { label: string; items: QuickLinkType[] }
>

interface FooterSectionsGroupProps {
    groupedLinks: GroupedFooterLinks
}


const NoFooterSectionsIndicator = (): ReactNode => {
    return (
        <div className="mt-6 lg:mt-0 lg:flex-1 text-sm text-muted-foreground">You don't have any footer links yet. Visit the settings page <Link className="text-link" href="/settings/navigation">here</Link> to configure your navigation settings.</div>
    )
}

const FooterSectionsGroup = ({ groupedLinks }: FooterSectionsGroupProps): ReactNode => {
    const _keys = Object.keys(groupedLinks)
    if (!_keys.length) {
        return (
            <NoFooterSectionsIndicator />
        )
    }
    return (
        <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {_keys.map((k) => {
                    return (
                        <FooterCategory
                            items={groupedLinks[k].items}
                            key={`footer-cat-${groupedLinks[k].label}`}
                            title={groupedLinks[k].label}
                        />
                    );
                })}
            </div>
        </div>
    )
}


FooterSectionsGroup.displayName = "FooterSectionsGroup"


export default FooterSectionsGroup;
