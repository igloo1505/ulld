import { Route } from "next"

export interface SidebarLink {
    Icon: React.FC<{ className: string }> | "darktoggle"
    href?: Route
    onClick?: () => void
}
