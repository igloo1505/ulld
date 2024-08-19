import React from "react";
import { NavigationFormSettingSchema } from "../form/schema";

interface FooterSectionItemLinkProps {
    data: NavigationFormSettingSchema["footerSections"][number]["items"][number];
}

const FooterSectionItemLink = ({ data }: FooterSectionItemLinkProps) => {
    return <div>{data.label}</div>;
};

FooterSectionItemLink.displayName = "FooterSectionItemLink";

export default FooterSectionItemLink;
