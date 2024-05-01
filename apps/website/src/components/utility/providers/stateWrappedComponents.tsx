"use client"
import LaunchSponsorRequestModal from "#/components/interaction/modals/sponsorRequest/launchSponsorRequest/main";
import store, { additionalState } from "#/state/store";
import { ReduxProvider } from "@ulld/state/wrappers/ReduxProvider";
import React from "react";
import InitialInteractionObserver from "../observers/initialInteractionObserver";

interface StateWrappedComponentsProps { 

}


const StateWrappedComponents = (props: StateWrappedComponentsProps) => {
    return (
        <ReduxProvider store={store}>
            <InitialInteractionObserver />
            <LaunchSponsorRequestModal />
        </ReduxProvider>
    );
};

StateWrappedComponents.displayName = "StateWrappedComponents";

export default StateWrappedComponents;
