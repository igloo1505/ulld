import React, { useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { NavbarButton, NavbarButtonClick } from "#/state/initialState/core";
import { navbarButtonClasses } from "../navbar/navbarButtonGroup";
import store from "#/state/store"
import { closeDrawer } from "#/state/slices/core";

interface MainNavigationDrawerButtonGroupProps {
    buttons: (NavbarButton | NavbarButtonClick)[];
    hide: boolean;
    className?: string;
}

declare global {
    interface WindowEventMap {
        "main-drawer-opened": CustomEvent;
    }
}

const MainNavigationDrawerButtonGroup = ({
    buttons,
    hide,
    className,
}: MainNavigationDrawerButtonGroupProps) => {

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("main-drawer-opened"));
    }, []);

    const closeDrawerOnClick = () => {
           store.dispatch(closeDrawer())
        }

    return (
        <div
            className={clsx(
                "group/drawer w-full flex flex-col max-h-[60vh] no-scrollbar overflow-y-auto [&_a]:p-4 [&_a]:cursor-pointer pb-8 drawer-container",
                hide && "hidden",
                className,
            )}
            id="navbar-btn-container-mobile"
            onClick={closeDrawerOnClick}
        >
            {buttons.map((a) => {
                if ("href" in a) {
                    return (
                        <Link
                            className={clsx(
                                "w-full px-4 py-3 cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300",
                            )}
                            href={a.href}
                            key={a.href}
                        >
                            {a.label}
                        </Link>
                    );
                }
                return (
                    <a
                        className={clsx(
                            "w-full px-4 py-3 cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300",
                        )}
                        onClick={(e) => {
                            closeDrawerOnClick()
                            a.onClick()
                        }}
                        key={a.id}
                    >
                        {a.label}
                    </a>
                );
            })}
            <Link
                className={clsx(
                    navbarButtonClasses,
                    "w-full px-4 py-3 cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300",
                )}
                href={"/sponsor"}
                onClick={closeDrawerOnClick}
            >
                Sponsor
            </Link>
        </div>
    );
};

MainNavigationDrawerButtonGroup.displayName = "MainNavigationDrawerButtonGroup";

export default MainNavigationDrawerButtonGroup;
