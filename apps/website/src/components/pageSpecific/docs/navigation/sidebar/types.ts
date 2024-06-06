import { ReactNode } from "react";

export interface DocsSidebarLink {
        label: ReactNode;
        href?: string;
        onClick?: () => void;
        activeKey?: string
    }
