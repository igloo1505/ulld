"use client";
import type { QuickLinkType } from "@ulld/utilities/types";
import Link from "next/link";
import type { ReactNode } from "react";
import React, { useMemo } from "react";
import { DynamicIcon } from "@ulld/icons";
import type { FooterLogoLink } from "../../types";
import type { NavigationFormSettingSchema } from "../../pages/settingPage/form/schema";
import FooterCategory from "./footerCategory";

const footerLogoLinks: FooterLogoLink[] = [];

interface InternalFooterProps {
    /** The rendered logo component, since the FC can't be passed directly to the client footer component. */
    children: ReactNode
    pluginSettings: NavigationFormSettingSchema | null
}

type GroupedQuickLinks = Record<
    string,
    { label: string; items: QuickLinkType[] }
>;

const getGroupedQuickLinks = (
    footerLinks?: NavigationFormSettingSchema["footerSections"],
): GroupedQuickLinks => {
    const groupedLinks: Record<
        string,
        { label: string; items: QuickLinkType[] }
    > = {};
    if(!footerLinks){
        return groupedLinks
    }
    for (const f of footerLinks) {
        if (!(f.label in groupedLinks)) {
            groupedLinks[f.label] = {
                label: f.label,
                items: f.items.map((l) => ({
                    label: l.label,
                    href: l.href,
                    category: f.label,
                })),
            };
        }
    }
    return groupedLinks;
};

const Footer = ({ children, pluginSettings }: InternalFooterProps): ReactNode => {

    const groupedQuickLinks = useMemo(() => getGroupedQuickLinks(pluginSettings?.footerSections), [pluginSettings?.footerSections]);

    return (
        <footer
            className="bg-gray-50 dark:bg-gray-950 mt-4 border-t dark:border-t-gray-800 dark:bg-opacity-50 z-[10] relative sidebarAdjust group-[.no-nav-transparent]/html:dark:bg-opacity-100"
            id="footer-panel"
        >
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <Link className="h-12 w-auto" href="/">
                                {children}
                            </Link>
                            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                                {pluginSettings?.quickLinkLabel || "Quick Links"}
                            </p>
                            <div className="flex mt-6 -mx-2">
                                {footerLogoLinks
                                    .slice(0, Math.min(3, footerLogoLinks.length))
                                    .map((l) => {
                                        return (
                                            <Link
                                                aria-label={l.label}
                                                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary"
                                                href={l.href}
                                                key={`${l.label}-${l.icon}`}
                                            >
                                                <DynamicIcon
                                                    className="w-5 h-5 fill-current"
                                                    name={l.icon}
                                                />
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {Object.keys(groupedQuickLinks).map((k) => {
                                return (
                                    <FooterCategory
                                        items={groupedQuickLinks[k].items}
                                        key={`footer-cat-${groupedQuickLinks[k].label}`}
                                        title={groupedQuickLinks[k].label}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">{pluginSettings?.copyrightText || `© Uh Little Less Dum ${new Date().getFullYear()} - All rights reserved, but do your thang`}</p>
                </div>
            </div>
        </footer>
    );
};

Footer.displayName = "Footer";

export default Footer;
