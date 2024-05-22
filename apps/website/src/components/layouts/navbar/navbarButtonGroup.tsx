"use client";
import React from "react";
import { RootState } from "#/state/store";
import { connect } from "react-redux";
import { InitialCoreState } from "#/state/initialState/core";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { useInitialRender } from "@ulld/hooks/useInitialRender";

const Link = motion(NextLink);

const connector = connect((state: RootState, props: any) => ({
    buttons: state.core.navbarButtons,
    props: props,
}));

interface NavbarButtonGroupProps {
    buttons: InitialCoreState["navbarButtons"];
}

export const navbarButtonClasses =
    "text-muted-foreground hover:text-foreground/90 transition-colors";

const NavbarButtonGroup = connector(({ buttons }: NavbarButtonGroupProps) => {
    const isInitial = useInitialRender();
    return (
        <div
            id="navbar-btn-container"
            className={
                "w-full h-full flex flex-row justify-end items-center gap-4 flex-grow pr-8"
            }
        >
            {buttons.map((a, i) => {
                return (
                    <Link
                        key={i}
                        className={navbarButtonClasses}
                        href={a.href}
                        initial={{
                            scale: 0,
                        }}
                        whileInView={{
                            scale: 1,
                        }}
                        transition={{
                            delay: isInitial ? buttons.length - i - 1 * 0.15 : 0,
                        }}
                    >
                        {a.label}
                    </Link>
                );
            })}
        </div>
    );
});

NavbarButtonGroup.displayName = "NavbarButtonGroup";

export default NavbarButtonGroup;
