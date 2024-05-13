"use client"
import LaunchSponsorRequestModal from "#/components/interaction/modals/sponsorRequest/launchSponsorRequest/main";
import store from "#/state/store";
import { ReduxProvider } from "@ulld/state/wrappers/ReduxProvider";
import React from "react";
import InitialInteractionObserver from "../observers/initialInteractionObserver";
import PreBetaAlertDialog from "#/components/pageSpecific/landing/preBetaAlert";

interface StateWrappedComponentsProps { 

}


const StateWrappedComponents = (props: StateWrappedComponentsProps) => {
    return (
        <ReduxProvider store={store}>
            <PreBetaAlertDialog />
            <InitialInteractionObserver />
            <LaunchSponsorRequestModal />
        </ReduxProvider>
    );
};

StateWrappedComponents.displayName = "StateWrappedComponents";

export default StateWrappedComponents;
