import { Route } from "next"
import { ValidIconName } from "../.."


export interface SidebarLink {
    Icon: React.FC<{ className: string }> | ValidIconName
    href?: Route
    onClick?: () => void
    label: string
}
