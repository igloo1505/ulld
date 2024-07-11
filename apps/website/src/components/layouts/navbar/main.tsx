"use client"
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import React from "react";
import AnimatedBrokenSubtitle from "./animatedBrokenSubtitle";
import InternalReduxProvider from "#/state/provider";
import Link from "next/link";
import NavbarDynamicButtons from "./navbarDynamicButtons";
import { usePathname } from "next/navigation";
import { pathIsMdxContent } from "#/fumaDocs/utils/pathIsMdxContent";



const Navbar = () => {
    const pathname = usePathname();
    if (pathIsMdxContent(pathname)) {
        return null;
    }
    return (
        <div
            id="main-navbar-container"
            className={
                "absolute z-30 top-0 left-0 right-0 w-full flex flex-row justify-between items-center h-20 px-6"
            }
        >
            <div className={"w-fit h-full flex flex-row justify-start items-center"}>
                <Link href="/" className={"w-16 mr-4"}>
                    <AnimatedUlldLogo delay={3} show={true} speed={3} />
                </Link>
                <AnimatedBrokenSubtitle delay={5} />
            </div>
            <InternalReduxProvider>
                <NavbarDynamicButtons />
            </InternalReduxProvider>
        </div>
    );
};

Navbar.displayName = "Navbar";

export default Navbar;
