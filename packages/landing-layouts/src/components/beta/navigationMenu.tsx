"use client";
import FullScreenNavigationMenu from "@ulld/navigation/fullScreenNav";
import React from "react";
import { useBuildStaticData } from "@ulld/hooks/useBuildStaticData";
import { useAppConfig } from "@ulld/hooks/useAppConfig";

interface NavigationMenuProps { }

const NavigationMenu = (props: NavigationMenuProps) => {
    const [ buildData ] = useBuildStaticData();
    const [appConfig] = useAppConfig()
    if(!appConfig){
        return null
    }
    return <FullScreenNavigationMenu
        isModal={false}
        noteTypes={appConfig.noteTypes}
        navConfig={appConfig.navigation}
        items={buildData?.navigationLinks}
    />;
};

NavigationMenu.displayName = "NavigationMenu";

export default NavigationMenu;
