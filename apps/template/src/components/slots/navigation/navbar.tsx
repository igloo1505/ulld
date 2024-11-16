// Slot: navigation/navbar propsExtends:NavbarComponentProps
import React from "react";
import { NavbarComponentProps } from "@ulld/navigation/types";
import REPLACEME from "#/components/REPLACEMEcomponent";
import LogoTemplate from "../ui/logo";


type InternalProperties = "logo"

const NavbarComponentTemplate = (props: Omit<NavbarComponentProps, InternalProperties>) => {

    const navbarProps: Pick<NavbarComponentProps, InternalProperties> = {
        logo: LogoTemplate
    }

    return <REPLACEME<NavbarComponentProps>
        {...props}
        {...navbarProps}
    />
};

NavbarComponentTemplate.displayName = "REPLACEME";

export default NavbarComponentTemplate;
