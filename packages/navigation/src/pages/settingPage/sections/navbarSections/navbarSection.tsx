import React from "react";
import AddNavbarLinkSection from "./addNavbarLink/main";
import NavbarLinkList from "./navbarLinksList/main";
import AddNavbarLinkFormContext from "./addNavbarLink/formContext";

interface NavbarSectionProps { }

const NavbarSection = (props: NavbarSectionProps) => {
    return (
        <div className={"w-full"}>
            <AddNavbarLinkFormContext>
                <AddNavbarLinkSection />
            </AddNavbarLinkFormContext>
            <NavbarLinkList />
        </div>
    );
};

NavbarSection.displayName = "NavbarSection";

export default NavbarSection;
