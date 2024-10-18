"use client";
import type { QuickLinkType } from "@ulld/utilities/types";
import Link from "next/link";
import type { ReactNode} from "react";
import React, { useMemo } from "react";
import { DynamicIcon } from "@ulld/icons";
import type { FooterLogoLink, FooterProps } from "../../types";
import FooterCategory from "./footerCategory";


const quickLinks: QuickLinkType[] = [
];


const footerLogoLinks: FooterLogoLink[] = [];


const Footer = ({ logo: Logo }: FooterProps): ReactNode => {
    const quickLinkLabel: string | undefined = undefined // Get this along with other properties from settings.
    const groupedQuickLinks = useMemo(() => {
        const groupedLinks: Record<
            string,
            { label: string; items: QuickLinkType[] }
        > = {};
        quickLinks.forEach((l) => {
            if (!(l.category in groupedLinks)) {
                groupedLinks[l.category] = {
                    label: l.label,
                    items: [],
                };
            }
            groupedLinks[l.category].items.push(l);
        });
        return groupedLinks;
    }, []);

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
                                <Logo className="w-auto h-7 fill-black" />
                            </Link>
                            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                                {quickLinkLabel || "Quick Links"}
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
                                        items={
                                            groupedQuickLinks[k]
                                                .items
                                        }
                                        key={`footer-cat-${groupedQuickLinks[k].label}`}
                                        title={groupedQuickLinks[k].label}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">{`© Uh Little Less Dum ${new Date().getFullYear()} - All rights reserved, but do your thang`}</p>
                </div>
            </div>
        </footer>
    );
};

Footer.displayName = "Footer";

export default Footer;
