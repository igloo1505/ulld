import { RootState } from "#/state/store";
import React from "react";
import Link from "next/link"
import clsx from 'clsx'

interface MainNavigationDrawerButtonGroupProps {
    buttons: RootState["core"]["navbarButtons"];
    hide: boolean
}

const MainNavigationDrawerButtonGroup = ({
    buttons,
    hide
}: MainNavigationDrawerButtonGroupProps) => {
    return (
        <div
            className={clsx("w-full", hide && "hidden")}
            id="navbar-btn-container-mobile"
        >
            {buttons.map((a) => {
                return (
                    <Link href={a.href} key={a.href}>
                        {a.label}
                    </Link>
                );
            })}
        </div>
    );
};

MainNavigationDrawerButtonGroup.displayName = "MainNavigationDrawerButtonGroup";

export default MainNavigationDrawerButtonGroup;
