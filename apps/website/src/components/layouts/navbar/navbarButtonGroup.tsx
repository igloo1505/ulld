"use client";
import React, { useEffect, useState } from "react";
import { RootState } from "#/state/store";
import { connect } from "react-redux";
import { InitialCoreState } from "#/state/initialState/core";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { useInitialRender } from "@ulld/hooks/useInitialRender";
import { usePathname } from "next/navigation";
import { useViewport } from "@ulld/hooks/useViewport";
import clsx from "clsx";

const Link = motion(NextLink);

const connector = connect((state: RootState, props: any) => ({
    buttons: state.core.navbarButtons,
    breakpoint: state.core.drawer.breakpoint,
    props: props,
}));

interface NavbarButtonGroupProps {
    buttons: InitialCoreState["navbarButtons"];
    breakpoint: InitialCoreState["drawer"]["breakpoint"];
}

export const navbarButtonClasses =
    "text-muted-foreground hover:text-foreground/90 transition-colors group-[.drawer-container]/drawer:hover:bg-secondary group-[.drawer-container]/drawer:text-muted-foreground group-[.drawer-container]/drawer:hover:text-secondary-foreground";

const homeNavbarClasses = ["bg-transparent"];
const otherHomeNavbarClasses = [
    "bg-background/95",
    "supports-[backdrop-filter]:bg-background/60",
    "backdrop-blur",
    "border-b",
    "border-border/40",
];


const NavbarButtonGroup = connector(
    ({ buttons, breakpoint }: NavbarButtonGroupProps) => {
        const isInitial = useInitialRender();
        const pathname = usePathname();
        const vp = useViewport();
        const [hideDonateLink, setHideDonateLink] = useState(false)

        const setTransparent = (beTransparent: boolean) => {
            let em = document.getElementById("main-navbar-container");
            if (!em) return;
            let add = beTransparent ? homeNavbarClasses : otherHomeNavbarClasses;
            let remove = beTransparent ? otherHomeNavbarClasses : homeNavbarClasses;
            add.forEach((a) => em.classList.add(a));
            remove.forEach((a) => em.classList.remove(a));
        };

        useEffect(() => {
            setTransparent(pathname === "/");
            setHideDonateLink(pathname.startsWith("/sponsor"))
        }, [pathname]);

        return (
            <div
                id="navbar-btn-container"
                className={clsx(
                    "w-full h-full flex flex-row justify-end items-center gap-4 flex-grow pr-8",
                    (!vp || vp.window.width < breakpoint) && "hidden",
                )}
            >
                {!hideDonateLink && <Link
                    href={"/sponsor"}
                    className={navbarButtonClasses}
                    initial={{
                        scale: 0,
                    }}
                    whileInView={{
                        scale: 1,
                    }}
                >Donate</Link>}
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
    },
);

NavbarButtonGroup.displayName = "NavbarButtonGroup";

export default NavbarButtonGroup;
