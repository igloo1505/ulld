"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavbarSearchInput from "./navbarSearchInput";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SearchIcon, BookmarkIcon } from "lucide-react";
import { toggleBookmark } from "@ulld/api/actions/clientOnly/bookmarking";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { NavbarComponentProps } from "../../types";
import { isAborted } from "zod";

const NavShowBreakpoint = 20;

interface NavbarProps extends NavbarComponentProps { }

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "set-note-id": CustomEvent<{ noteId: number | false }>;
    }
}

const showButtonTypes: NavbarComponentProps["navConfig"]["bookmarkLink"][] = [
    "both",
    "navbar",
];

const Navbar = ({ navConfig: nav, noteTypes, logo: Logo }: NavbarProps) => {
    const pathname = usePathname();
    const [show, setShow] = useState(pathname !== "/");
    const [noteId, setNoteId] = useState<number | undefined>(undefined);
    const [isAbsolute, setIsAbsolute] = useState(pathname === "/");

    useEffect(() => {
      setIsAbsolute(pathname === "/")

    }, [pathname])
    

    useEventListener("set-note-id", (e) =>
        setNoteId(e.detail.noteId === false ? undefined : e.detail.noteId),
    );

    const hoverListener = (e: MouseEvent) => {
        if (pathname !== "/") {
            setShow(true);
            return;
        }
        if (e.pageY <= NavShowBreakpoint) {
            setShow(true);
        }
        if (e.pageY > 64) {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", hoverListener);
        return () => window.removeEventListener("mousemove", hoverListener);
    }, [pathname]);

    const btns = noteTypes.filter((a) => a.inNavbar);
    const btns2 = noteTypes
        .sort((a, b) => a.matchWeight - b.matchWeight)
        .slice(0, 3 - btns.length);
    const buttons = [...btns, ...btns2];

    return (
        <nav
            className={clsx(
                "z-10 bg-gray-50 shadow dark:bg-gray-950 h-[--nav-height] flex justify-center items-center border-b dark:border-b-gray-800 w-screen sidebarAdjust border-opacity-50 focus-within:translate-y-[0px]",
                show ? "translate-y-[0px]" : "translate-y-[-100%]",
                isAbsolute ? "absolute" : "relative"
            )}
            id="top-navbar"
        >
            <div className="pl-4 py-3 md:pl-6 mx-0 px-8 flex w-screen min-w-screen">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        /* width={300} */
                        /* height={300} */
                        className={"h-[calc(var(--nav-height)*0.7)] w-[80px]"}
                    >
                        {Logo}
                    </Link>
                </div>
                <div
                    className={
                        "inset-x-0 z-20 w-full py-4 transition-all duration-300 ease-in-out mt-0 p-0 top-0 relative translate-x-0 flex items-center justify-end lg:justify-between"
                    }
                >
                    <div className="px-2  flex-row mx-10 py-0 hidden lg:flex">
                        {buttons?.map((b, i) => {
                            if ("href" in b && b.href) {
                                return (
                                    <Link
                                        href={b.href}
                                        className={
                                            "px-2.5 py-2 navbtn transform mx-2 hidden lg:flex"
                                        }
                                        key={`navbar-button-${i}`}
                                    >
                                        {b.label}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                    <div
                        className={"flex flex-row gap-2 justify-center items-center w-fit"}
                    >
                        {showButtonTypes.includes(nav.bookmarkLink) && (
                            <Link
                                href="/bookmarks"
                                className={
                                    "px-2.5 py-2 navbtn transform mx-2 hidden sm:flex lg:hidden"
                                }
                            >
                                Bookmarks
                            </Link>
                        )}
                        <div className="relative mt-0 w-[225px]">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <SearchIcon className={"w-5 h-5 text-gray-400"} />
                            </span>
                            <NavbarSearchInput />
                        </div>
                        <a
                            role="button"
                            onClick={() => toggleBookmark(noteId)}
                            className={
                                "bookmark-indicator ml-4 group-[.isBookmarked]/body:bg-primary text-primary-foreground rounded-lg p-1"
                            }
                        >
                            <BookmarkIcon
                                className={
                                    "text-gray-800 dark:text-gray-200 group-[.isBookmarked]/body:text-primary-foreground"
                                }
                            />
                        </a>
                        <div
                            className={
                                "text-red-500 dark:text-red-400 text-sm hidden group-[.preferFs]/body:inline-block"
                            }
                        >
                            fs
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
