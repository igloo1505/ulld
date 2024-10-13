import { NavigationFormSettingSchema } from "./schema"

type NavLinkType = NavigationFormSettingSchema["navbarLinks"][number] | NavigationFormSettingSchema["sidebarLinks"][number]

export const linkItemIsEqual = (a: NavLinkType, b: NavLinkType): boolean => {
    if(a.label !== b.label){
        return false
    }
    const urlInA = "url" in a
    if(urlInA !== "url" in b){
        return false
    }
    if(urlInA){
        return a.url === (b as any).url
    } else {
        return (a as any).action === (b as any).action
    }
}

export const superTruthy = (s: string | undefined | null) => Boolean(s && s.length);

