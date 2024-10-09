import React from "react";
import AddNavbarLinkSection from "./addNavbarLink/main";
import NavbarLinkList from "./navbarLinksList/main";

interface NavbarSectionProps { }

const NavbarSection = (props: NavbarSectionProps) => {
    return (
        <div className={"w-full"}>
            <AddNavbarLinkSection
            />
            <NavbarLinkList />
        </div>
    );
};

NavbarSection.displayName = "NavbarSection";

export default NavbarSection;
