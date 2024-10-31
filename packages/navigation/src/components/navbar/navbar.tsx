"use client";
import type { ReactNode} from "react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchIcon, BookmarkIcon } from "lucide-react";
import { useActiveNoteIdValue } from "@ulld/hooks/useActiveNoteId";
import { cn } from "@ulld/utilities/cn";
import { runActionById } from "@ulld/state/runActionById";
import type { NavbarComponentProps } from "../../types";
import type { NavbarLink } from "../../pages/settingPage/form/schema";
import { IsomorphicNavLink } from "../utilityComponents/isomorphicNavLink";
import NavbarSearchInput from "./navbarSearchInput";


const NavShowBreakpoint = 20;

export interface NavbarProps extends Omit<NavbarComponentProps, "logo"> { 
    buttons?: NavbarLink[]
    logo?: ReactNode
}


const Navbar = ({ buttons = [], logo: Logo }: NavbarProps): ReactNode => {
    const pathname = usePathname();
    const [show, setShow] = useState(pathname !== "/");
    const activeNoteId  = useActiveNoteIdValue();
    const [isAbsolute, setIsAbsolute] = useState(pathname === "/");

    useEffect(() => {
        setIsAbsolute(pathname === "/");
    }, [pathname]);


    useEffect(() => {
    const hoverListener = (e: MouseEvent): void => {
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
        window.addEventListener("mousemove", hoverListener);
        return () => {
            window.removeEventListener("mousemove", hoverListener)
        }
    }, [pathname]);

    return (
        <nav
            className={cn(
                "z-10 bg-gray-50 shadow dark:bg-gray-950 h-[--nav-height] flex justify-center items-center border-b dark:border-b-gray-800 w-screen sidebarAdjust border-opacity-50 focus-within:translate-y-[0px]",
                show ? "translate-y-[0px]" : "translate-y-[-100%]",
                isAbsolute ? "absolute" : "relative",
            )}
            id="top-navbar"
        >
            <div className="pl-4 py-3 md:pl-6 mx-0 px-8 flex w-screen min-w-screen flex-row justify-between items-center">
                    <Link
                        className="h-[calc(var(--nav-height)*0.7)] max-h-9 max-w-[80px]"
                        href="/"
                    >
                        {Logo}
                    </Link>
                <div
                    className="inset-x-0 z-20 w-fit py-4 transition-all duration-300 ease-in-out mt-0 p-0 top-0 relative translate-x-0 flex items-center justify-end lg:justify-between"
                >
                    <div className="px-2  flex-row mx-10 py-0 hidden lg:flex">
                        {buttons.map((a): ReactNode => {
                                return (
                                   <IsomorphicNavLink
                                        className="px-2.5 py-2 navbtn transform mx-2 hidden lg:flex"
                                        item={a}
                                        key={`navbar-button-${a.value}-${a.label}`}
                                    >
                                        {a.label}
                                    </IsomorphicNavLink>
                                );
                        })}
                    </div>
                    <div
                        className="flex flex-row gap-2 justify-center items-center w-fit"
                    >
                            <Link
                                className="px-2.5 py-2 navbtn transform mx-2 hidden sm:flex lg:hidden"
                                href="/bookmarks"
                            >
                                Bookmarks
                            </Link>
                        <div className="relative mt-0 w-[225px]">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <SearchIcon className="w-5 h-5 text-gray-400" />
                            </span>
                            <NavbarSearchInput />
                        </div>
                        <button
                            className="bookmark-indicator ml-4 group-[.isBookmarked]/body:bg-primary text-primary-foreground rounded-lg p-1"
                            onClick={() => {
                                if(activeNoteId.current){
                                    runActionById("toggleBookmarked", activeNoteId.current).catch(() => {
                                        // eslint-disable-next-line no-console -- Need to log error. #MoveToLoggerPackage
                                        console.error(`Could not toggle bookmarked state for note with id ${activeNoteId.current}`)
                                    })
                                }
                            }}
                            type="button"
                        >
                            <BookmarkIcon
                                className="text-gray-800 dark:text-gray-200 group-[.isBookmarked]/body:text-primary-foreground"
                            />
                        </button>
                        <div
                            className="text-red-500 dark:text-red-400 text-sm hidden group-[.preferFs]/body:inline-block"
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
