import type { ValidIconName } from "../../../internallyGenerated/validIconNameUnion";
import type { InternalGlobalActionIds } from "../../baseApp/state/index";

export type NavbarLink<T extends "url" | "action" = "url" | "action"> = {
    label: string;
    fieldType: T;
} & (T extends "url"
    ? {
        fieldType: "url";
        value: string;
    }
    : {
        fieldType: "action";
        value: InternalGlobalActionIds;
    });


export type SidebarLink<T extends "url" | "action" = "url" | "action"> =
    NavbarLink<T> & {
        icon: ValidIconName;
        position: "top" | "bottom";
    };
