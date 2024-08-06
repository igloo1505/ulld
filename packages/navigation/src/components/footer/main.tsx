"use client";
import { QuickLinkType } from "@ulld/utilities/types";
import Link from "next/link";
import React, { useMemo } from "react";
import { FooterLogoLink, FooterProps } from "../../types";
import { DynamicIcon } from "@ulld/icons";
import FooterCategory from "./footerCategory";


const quickLinks: QuickLinkType[] = [
];


const footerLogoLinks: FooterLogoLink[] = [];

/* TODO: Make sure to limit the form to 3 logo links, and three categories or no more than 4 items each. */

const Footer = ({ logo: Logo }: FooterProps) => {
    const quickLinkLabel = undefined // Get this along with other properties from settings.
    const groupedQuickLinks = useMemo(() => {
        const groupedLinks: Record<
            string,
            { label: string; items: QuickLinkType[] }
        > = {};
        quickLinks.forEach((l) => {
            if (!groupedLinks[l.category]) {
                groupedLinks[l.category] = {
                    label: l.label,
                    items: [],
                };
            }
            groupedLinks[l.category]?.items.push(l);
        });
        return groupedLinks;
    }, []);

    return (
        <footer
            className={
                "bg-gray-50 dark:bg-gray-950 mt-4 border-t dark:border-t-gray-800 dark:bg-opacity-50 z-[10] relative sidebarAdjust group-[.no-nav-transparent]/html:dark:bg-opacity-100"
            }
            id="footer-panel"
        >
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <Link href="/" className={"h-12 w-auto"}>
                                <Logo className={"w-auto h-7 fill-black"} />
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
                                                key={`${l.label}-${l.icon}`}
                                                href={l.href}
                                                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary"
                                                aria-label={l.label}
                                            >
                                                <DynamicIcon
                                                    name={l.icon}
                                                    className={"w-5 h-5 fill-current"}
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
                                        key={`footer-cat-${groupedQuickLinks[k].label}`}
                                        items={
                                            groupedQuickLinks[k as keyof typeof groupedQuickLinks]
                                                .items
                                        }
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
