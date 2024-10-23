import type { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import type { NavigationLink } from "@ulld/configschema/buildTypes";
import type { FC, HTMLProps, ReactNode } from "react";
import type { ValidIconName } from "@ulld/icons";
import type { NotePropertiesOutput, PassedLogoProps } from "@ulld/types";

export interface NoteDetailSheetProps {
    // headings: ContentHeading[];
    // title: string
    // bookmarked: boolean
    rawContent?: string
    format: "mdx" | "notebook"
    noteProps: NotePropertiesOutput
    docTypeData: AppConfigSchemaOutput["noteTypes"][number]
}



export interface NavbarComponentProps {
    noteTypes: AppConfigSchemaOutput["noteTypes"];
    navConfig: AppConfigSchemaOutput["navigation"];
    logo: ReactNode;
}

export interface FullScreenNavProps
    extends Pick<NavbarComponentProps, "noteTypes" | "navConfig"> {
    isModal?: boolean;
    items: NavigationLink[];
}

export interface SidebarItem { 
    label: string;
    href: string;
    id: string
}

export interface MultipageSidebarProps extends HTMLProps<HTMLElement> {
    className?: string;
    items: SidebarItem[];
}

export type SecondaryNavigationProps = Pick<NavbarComponentProps, "noteTypes" | "navConfig">

export interface FooterLogoLink {
    href: string;
    icon: ValidIconName;
    label: string;
}

export interface FooterProps {
    logo: FC<PassedLogoProps>;
}
