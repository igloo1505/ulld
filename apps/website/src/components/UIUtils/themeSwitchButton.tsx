"use client"
import { showThemeModal } from "#/state/actions/interactions";
import React, { HTMLProps, ReactNode } from "react";
import clsx from 'clsx'

interface ThemeSwitchTriggerProps extends HTMLProps<HTMLAnchorElement> {
    children: ReactNode;
}

const ThemeSwitchTrigger = ({
    children,
    ...props
}: ThemeSwitchTriggerProps) => {
    return <a 
        {...props}
        role="button"
        className={clsx("!text-link cursor-pointer", props.className)}
        onClick={showThemeModal}
    >{children}</a>;
};

ThemeSwitchTrigger.displayName = "ThemeSwitchTrigger";

export default ThemeSwitchTrigger;
