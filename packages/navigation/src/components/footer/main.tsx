"use client";
import type { QuickLinkType } from "@ulld/utilities/types";
import Link from "next/link";
import type { ReactNode } from "react";
import React, { useMemo } from "react";
import { DynamicIcon } from "@ulld/icons";
import { cn } from "@ulld/utilities/cn";
import type { FooterLogoLink } from "../../types";
import type { NavigationFormSettingSchema } from "../../pages/settingPage/form/schema";
import FooterSectionsGroup, { GroupedFooterLinks } from "./footerSectionsGroup";

const footerLogoLinks: FooterLogoLink[] = [];


type SettingsData = Omit<NavigationFormSettingSchema, "quickLinks"> & {
    quickLinks?: NavigationFormSettingSchema["quickLinks"]
}

interface InternalFooterProps {
    /** The rendered logo component, since the FC can't be passed directly to the client footer component. */
    children: ReactNode
    pluginSettings: SettingsData | null
}

type GroupedQuickLinks = Record<
    string,
    { label: string; items: QuickLinkType[] }
>;

const getGroupedFooterLinks = (
    footerLinks?: NavigationFormSettingSchema["footerSections"],
): {groupedFooterLinks: GroupedQuickLinks, hasFooterSections: boolean} => {
    const groupedLinks: GroupedFooterLinks = {};
    if(!footerLinks){
        return {groupedFooterLinks: groupedLinks, hasFooterSections: false}
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
     return {hasFooterSections: true, groupedFooterLinks: groupedLinks}
};

const Footer = ({ children, pluginSettings }: InternalFooterProps): ReactNode => {

    const { groupedFooterLinks, hasFooterSections } = useMemo(() => getGroupedFooterLinks(pluginSettings?.footerSections), [pluginSettings?.footerSections]);
    

    return (
        <footer
            className="bg-gray-50 dark:bg-gray-950 mt-4 border-t dark:border-t-gray-800 dark:bg-opacity-50 z-[10] relative sidebarAdjust group-[.no-nav-transparent]/html:dark:bg-opacity-100"
            id="footer-panel"
        >
            <div className="container p-6 mx-auto">
                <div className="lg:flex lg:flex-row lg:gap-6">
                    <div className={cn("w-full -mx-6 lg:w-2/5", !hasFooterSections && "lg:w-fit")}>
                        <div className="px-6 w-fit">
                            <Link className="h-12 w-auto" href="/">
                                {children}
                            </Link>
                            <p className={cn("max-w-sm mt-2 text-gray-500 dark:text-gray-400", !pluginSettings?.quickLinks?.length && "visibility-[hidden]")}>
                                {pluginSettings?.quickLinkLabel || "Quick Links"}
                            </p>
                            <div className="flex mt-6 -mx-2 w-fit">
                                {pluginSettings?.quickLinks
                                    ?.slice(0, Math.min(3, footerLogoLinks.length))
                                    .map((l) => {
                                        return (
                                            <Link
                                                /* aria-label={l.label} */
                                                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary"
                                                href={l.url}
                                                key={`${l.url}-${l.icon}`}
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
                    <FooterSectionsGroup groupedLinks={groupedFooterLinks} />
                </div>
                <div>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">{pluginSettings?.copyrightText || `© Uh Little Less Dum ${new Date().getFullYear()} - All rights reserved, but do your thang`}</p>
                </div>
            </div>
        </footer>
    );
};

Footer.displayName = "Footer";

export default Footer;
