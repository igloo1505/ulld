import React, { CSSProperties } from 'react'
import Link from 'next/link';
import FooterCategory from './footerCategory';
import { Route } from 'next';
import clsx from 'clsx';
import { BrandTitle } from '..';
import { QuickLinkType } from '@ulld/utilities';
import { GithubIcon } from 'lucide-react';
import VercelIcon from '../icons/logoIcons/vercel';


const quickLinks: QuickLinkType[] = [
    {
        category: "docs",
        label: "Scipy",
        href: "https://scipy.org/" as Route
    },
    {
        category: "youtube",
        label: "Professor Leonard",
        href: "https://www.youtube.com/@ProfessorLeonard" as Route
    },
    {
        category: "youtube",
        label: "MIT",
        href: "https://www.youtube.com/@mitocw" as Route
    },
    {
        category: "locations",
        label: "Practice Exam",
        href: "/practiceExam"
    },
    {
        category: "lectures",
        label: "MIT: General Relativity",
        href: "https://www.youtube.com/playlist?list=PLUl4u3cNGP629n_3fX7HmKKgin_rqGzbx" as Route
    },
    {
        category: "lectures",
        label: "Susskind: General Relativity",
        href: "https://www.youtube.com/playlist?list=PLpGHT1n4-mAvcXwzOIz3dHnGZaQP1LEib" as Route
    },
    {
        category: "lectures",
        label: "Susskind: Special Relativity",
        href: "https://www.youtube.com/playlist?list=PLD9DDFBDC338226CA" as Route
    },
]

const groupedQuickLinks: { [k in QuickLinkType['category']]?: QuickLinkType[] } = {}

quickLinks.forEach((l) => {
    if (!groupedQuickLinks[l.category]) {
        groupedQuickLinks[l.category] = []
    }
    groupedQuickLinks[l.category]?.push(l)
})





const Footer = (props: { style?: CSSProperties, className?: string }) => {
    return (
        <footer className={clsx("bg-gray-50 dark:bg-gray-950 mt-4 border-t dark:border-t-gray-800 dark:bg-opacity-50 z-[10] relative sidebarAdjust group-[.no-nav-transparent]/html:dark:bg-opacity-100", props.className)} id="footer-panel" style={props.style}>
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <Link href="/" className={"h-12 w-auto"}>
                                <BrandTitle className={"w-auto h-7 fill-black"} />
                            </Link>
                            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Quick links to Vercel & Github</p>
                            <div className="flex mt-6 -mx-2">
                                <Link href={"https://vercel.com/igloodevelopment" as Route}
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Vercel">
                                    <VercelIcon className={"w-5 h-5 fill-current"} />
                                </Link>
                                <Link href={"https://www.github.com/igloo1505" as Route}
                                    aria-label="Github"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                >
                                    <GithubIcon className={"w-5 h-5 fill-current"} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <FooterCategory items={groupedQuickLinks.locations} title="Navigation" />
                            <FooterCategory items={groupedQuickLinks.youtube} title="Youtube" />
                            <FooterCategory items={groupedQuickLinks.lectures} title="Lectures" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-gray-500 dark:text-gray-400 mt-2">{`© Uh Little Less Dum ${new Date().getFullYear()} - All rights reserved, but do your thang`}</p>
                </div>
            </div>
        </footer>
    )
}


Footer.displayName = "Footer"


export default Footer;
