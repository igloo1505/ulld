import React, { type ReactNode } from "react";
import { PluginSettings } from "@ulld/api/pluginSettings-server";
import type { SecondaryNavigationProps } from "../../types";
import type { NavigationFormSettingSchema, SidebarLink } from "../../pages/settingPage/form/schema";
import PermanentSidebar from "./sidebarNavigation";
import type { SortedSidebarLinks } from "./types";


const getFilteredInternalLinks = (
    sidebarLinks?: SidebarLink[],
): SortedSidebarLinks => {

    if(!sidebarLinks){
        return {
            top: [],
            bottom: []
        }
    }

    const items: SortedSidebarLinks = {
        top: [],
        bottom: [],
    };

    for (const k of sidebarLinks) {
        items[k.position].push(k)
    }

    return items;
};

const SidebarSSR = async (
    props: SecondaryNavigationProps,
): Promise<ReactNode> => {
    const pluginSettings = new PluginSettings<NavigationFormSettingSchema>({
        pluginName: "@ulld/navigation",
    });
    const settings = await pluginSettings.getSettings();
    const sidebarLinks = getFilteredInternalLinks(
        settings?.sidebarLinks,
    );

    return <PermanentSidebar {...props} sidebarLinks={sidebarLinks} />;
};

SidebarSSR.displayName = "SidebarSSR";

export default SidebarSSR;
