"use client"
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Link from 'next/link';
import NavbarSearchInput from './navbarSearchInput';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { RootState } from '@ulld/state';
import { SearchIcon, BookmarkIcon } from 'lucide-react';
import { ParsedAppConfig } from '@ulld/configschema';
import { Route } from "next"
import { toggleBookmark } from '@ulld/api';
import { internalLinks } from '../sidebar/internalSidebarButtons';
import Logo from '../../icons/logo/logo';


const NavShowBreakpoint = 20





const connector = connect((state: RootState, props: any) => ({
    open: state.UI.drawer.open,
    navtype: state.UI.navtype,
    noteId: state.functionality.currentNoteId,
    props: props
}))

interface NavbarProps {
    open: boolean
    navtype: RootState['UI']['navtype']
    noteId?: number
    config: ParsedAppConfig
}


const getNavbarLinks = (config: ParsedAppConfig) => {
    let ntIds = config.noteTypes.map((l) => l.id)
    let links: (
        { href: string, label: string, Icon?: React.FC<{ className?: string }> }
        |
        { onClick: () => void, label: string, Icon?: React.FC<{ className?: string }> }
    )[] = []
    for (const k of config.navigation.navbarLinkIds) {
        let idx = ntIds.indexOf(k)
        if (idx >= 0) {
            let item = config.noteTypes[idx]!
            links.push({
                href: item.url,
                label: item.label
            })
        } else if (k in internalLinks) {
            let item = internalLinks[k]!
            links.push(item.onClick ? {
                onClick: item.onClick,
                label: item.label
            } : {
                href: item.href as Route,
                label: item.label
            })
        }
    }
    return links
}

export const Navbar = connector(({ noteId, config }: NavbarProps) => {
    const pathname = usePathname()
    const [show, setShow] = useState(pathname !== "/")
    const [isAbsolute, setIsAbsolute] = useState(false)
    const buttons = getNavbarLinks(config)
    const hoverListener = (e: MouseEvent) => {
        if (pathname !== "/") {
            setShow(true)
            return
        }
        if (e.pageY <= NavShowBreakpoint) {
            setShow(true)
        }
        if (e.pageY > 64) {
            setShow(false)
        }
    }

    useEffect(() => {
        setIsAbsolute(pathname === "/")
        if (pathname === "/") {
            window.addEventListener("mousemove", hoverListener)
        } else {
            setShow(true)
        }
        return () => window.removeEventListener("mousemove", hoverListener)
    }, [pathname])


    return (
        <nav className={clsx("relative z-10 bg-gray-50 shadow dark:bg-gray-950 h-[--nav-height] flex justify-center items-center border-b dark:border-b-gray-800 w-screen sidebarAdjust border-opacity-50", show ? "translate-y-[0px]" : "translate-y-[-100%]", isAbsolute && "absolute left-0 top-[-100%]")} id="top-navbar">
            <div className="pl-4 py-3 md:pl-6 mx-0 px-8 flex w-screen min-w-screen">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Logo width={300} height={300} className={"h-[calc(var(--nav-height)*0.7)] w-auto"} priority />
                    </Link>
                </div>
                <div className={"inset-x-0 z-20 w-full py-4 transition-all duration-300 ease-in-out mt-0 p-0 top-0 relative translate-x-0 flex items-center justify-end lg:justify-between"}>
                    <div className="px-2  flex-row mx-10 py-0 hidden lg:flex">
                        {buttons.map((b, i) => {
                            if ("href" in b) {
                                return (
                                    <Link href={b.href} className={"px-2.5 py-2 navbtn transform mx-2 hidden lg:flex"} key={`navbar-button-${i}`}>{b.label}</Link>
                                )
                            }
                            return <a role="button" onClick={b.onClick} className={"px-2.5 py-2 navbtn transform mx-2 hidden lg:flex"} key={`navbar-button-${i}`}>{b.label}</a>
                        })}
                    </div>
                    <div className={"flex flex-row gap-2 justify-center items-center w-fit"}>
                        <Link href="/bookmarks" className={"px-2.5 py-2 navbtn transform mx-2 hidden sm:flex lg:hidden"}>Bookmarks</Link>
                        <div className="relative mt-0 w-[225px]">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <SearchIcon className={"w-5 h-5 text-gray-400"} />
                            </span>
                            <NavbarSearchInput />
                        </div>
                        <a role="button" onClick={() => toggleBookmark(noteId)} className={"bookmark-indicator ml-4 group-[.isBookmarked]/body:bg-primary text-primary-foreground rounded-lg p-1"}>
                            <BookmarkIcon className={"text-gray-800 dark:text-gray-200 group-[.isBookmarked]/body:text-primary-foreground"} />
                        </a>
                        <div className={"text-red-500 dark:text-red-400 text-sm hidden group-[.preferFs]/body:inline-block"}>fs</div>
                    </div>
                </div>
            </div>
        </nav>
    )
})


Navbar.displayName = "Navbar"
