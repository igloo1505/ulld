import type { NavbarLink, SidebarLink } from "@ulld/types";
export interface InitialSeedData {
    navigation: {
        settings: {
            sidebarLinks: (SidebarLink<"action"> | SidebarLink<"url">)[];
            navbarLinks: NavbarLink[];
        };
    };
}
export declare const initialSeedData: InitialSeedData;
//# sourceMappingURL=initialSeedData.d.ts.map