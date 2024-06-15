import React from "react";
import NavbarButtonGroup from "./navbarButtonGroup";
import NavbarDrawerToggle from "./navbarDrawerToggle";

interface NavbarDynamicButtonsProps { }

const NavbarDynamicButtons = (props: NavbarDynamicButtonsProps) => {
    return (
        <>
            <NavbarButtonGroup />
            <NavbarDrawerToggle />
        </>
    );
};

NavbarDynamicButtons.displayName = "NavbarDynamicButtons";

export default NavbarDynamicButtons;
