import { navbarButtonClasses } from "#/components/layouts/navbar/navbarButtonGroup";
import React from "react";
import NavbarButtonPortal from "../portals/navbar";
import Link from "next/link";

interface NavbarBlogButtonProps { }

const NavbarBlogButton = (props: NavbarBlogButtonProps) => {
    return (
        <NavbarButtonPortal>
            <Link className={navbarButtonClasses} href="/blog">
                Blog
            </Link>
        </NavbarButtonPortal>
    );
};

NavbarBlogButton.displayName = "NavbarBlogButton";

export default NavbarBlogButton;
