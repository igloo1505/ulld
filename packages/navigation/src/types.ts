import { HTMLProps } from "react";

export interface FullScreenNavProps {
    isModal?: boolean;
}

export type SidebarItem = { label: string; href: string; id: string };

export interface MultipageSidebarProps extends HTMLProps<HTMLElement> {
    className?: string;
    items: SidebarItem[];
}
