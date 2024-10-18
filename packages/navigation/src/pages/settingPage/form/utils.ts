import type { NavbarLink, SidebarLink } from "./schema";

export type NavLinkType = NavbarLink | SidebarLink;

export const linkItemIsEqual = (a: NavLinkType, b: NavLinkType): boolean => {
    if (a.label !== b.label) {
        return false;
    }
    if(a.value !== b.value){
        return false
    }
    return true;
};

export const superTruthy = (s: string | undefined | null): s is string =>
    Boolean(s?.length);


export const isValidUrl = (val: string): boolean => {
    return [
        "https://",
        "http://",
        "www.",
        "/",
        "#"
    ].some((s) => val.startsWith(s))
}



// TODO: Implement an enum here and check for actual validity of action tring.
export const isValidAction = (val: string): boolean => {
   return val.length > 3        
}

export const isValidUrlAction = (val: string, type: "url" | "action"): boolean => {
       return type === "url" ? isValidUrl(val) : isValidAction(val) 
}
