import { Route} from "next"


export interface QuickLinkType {
    label: string
    category: "math" | "physics" | "docs" | "youtube" | "lectures" | "locations"
    href: Route
}

