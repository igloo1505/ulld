"use client"
import store from "#/state/store";
import { ReduxProvider } from "@ulld/state/wrappers/ReduxProvider";
import React, { useEffect } from "react";
import PreBetaAlertDialog from "#/components/pageSpecific/landing/preBetaAlert";
import { usePathname } from "next/navigation";
import { setHeroVisibility } from "#/state/actions/dom";

interface StateWrappedComponentsProps { 

}


const StateWrappedComponents = (props: StateWrappedComponentsProps) => {
    const pn = usePathname()
    useEffect(() => {
        setHeroVisibility(pn === "/")
    }, [pn])
    return (
        <ReduxProvider store={store}>
            <PreBetaAlertDialog />
        </ReduxProvider>
    );
};

StateWrappedComponents.displayName = "StateWrappedComponents";

export default StateWrappedComponents;
