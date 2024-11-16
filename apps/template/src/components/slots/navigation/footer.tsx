// Slot: navigation/Footer type:component propsExtends:FooterProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import { FooterProps } from "@ulld/navigation/types";
import React from "react";
import LogoTemplate from "../ui/logo";


const FooterComponentTemplate = () => {
    const props: Required<FooterProps> = {
        logo: LogoTemplate
    }
    return <REPLACEME<FooterProps>
        {...props}
    />
};

FooterComponentTemplate.displayName = "FooterComponentTemplate";

export default FooterComponentTemplate;
