import React from "react";
import Link from "next/link"
import clsx from 'clsx'
import { NavbarButton, NavbarButtonClick } from "#/state/initialState/core";

interface MainNavigationDrawerButtonGroupProps {
    buttons: (NavbarButton | NavbarButtonClick)[];
    hide: boolean
}

const MainNavigationDrawerButtonGroup = ({
    buttons,
    hide
}: MainNavigationDrawerButtonGroupProps) => {
    return (
        <div
            className={clsx("w-full flex flex-col max-h-[60vh] no-scrollbar overflow-y-auto", hide && "hidden")}
            id="navbar-btn-container-mobile"
        >
            {buttons.map((a, i) => {
                if("href" in a){
                return (
                    <Link href={a.href} key={a.href}>
                        {a.label}
                    </Link>
                );
                }
                return (
                    <a className={clsx("w-full px-4 py-3 cursor-pointer", i < buttons.length - 1 && "border-b")} onClick={a.onClick} key={a.id}>
                        {a.label}
                    </a>
                );
            })}
        </div>
    );
};

MainNavigationDrawerButtonGroup.displayName = "MainNavigationDrawerButtonGroup";

export default MainNavigationDrawerButtonGroup;
