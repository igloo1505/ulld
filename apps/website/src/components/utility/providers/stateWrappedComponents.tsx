"use client"
import React, { useEffect } from "react";
import PreBetaAlertDialog from "#/components/pageSpecific/landing/preBetaAlert";
import { usePathname } from "next/navigation";
import { setHeroVisibility } from "#/state/actions/dom";
import InternalReduxProvider from "#/state/provider";

interface StateWrappedComponentsProps { 

}


const StateWrappedComponents = (props: StateWrappedComponentsProps) => {
    const pn = usePathname()
    useEffect(() => {
        setHeroVisibility(pn === "/")
    }, [pn])
    return (
        <InternalReduxProvider>
            <PreBetaAlertDialog />
        </InternalReduxProvider>
    );
};

StateWrappedComponents.displayName = "StateWrappedComponents";

export default StateWrappedComponents;
