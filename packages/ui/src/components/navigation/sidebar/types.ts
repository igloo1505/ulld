import { Route } from "next"
import type { ValidIconName } from "../../icons/DynamicIcon"


export interface SidebarLink {
    Icon: React.FC<{ className: string }> | ValidIconName
    href?: Route
    onClick?: () => void
    label: string
}
