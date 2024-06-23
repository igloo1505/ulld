import { RefObject } from "react";

export interface ToggleBlogSidebarProps {
    buttonRef?: RefObject<HTMLAnchorElement>
    open?: boolean
}

