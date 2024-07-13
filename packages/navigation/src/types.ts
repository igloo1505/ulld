import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { NavigationLink } from "@ulld/configschema/buildTypes";
import { FC, HTMLProps } from "react";
import { ValidIconName } from "@ulld/icons";

export interface NavbarComponentProps {
    noteTypes: AppConfigSchemaOutput["noteTypes"];
    navConfig: AppConfigSchemaOutput["navigation"];
    logo: FC<HTMLProps<HTMLOrSVGElement>>
}

export interface FullScreenNavProps
    extends Pick<NavbarComponentProps, "noteTypes" | "navConfig"> {
    isModal?: boolean;
    items: NavigationLink[]
}

export type SidebarItem = { label: string; href: string; id: string };

export interface MultipageSidebarProps extends HTMLProps<HTMLElement> {
    className?: string;
    items: SidebarItem[];
}

export interface SecondaryNavigationProps
    extends Pick<NavbarComponentProps, "noteTypes" | "navConfig"> { }


export interface FooterLogoLink {
    href: string
    icon: ValidIconName
    label: string
}

export interface FooterProps {
     logo: FC<HTMLProps<HTMLOrSVGElement>>
}
