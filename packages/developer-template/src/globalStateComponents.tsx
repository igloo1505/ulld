import React from "react";
import { GlobalStatePortal } from "@ulld/developer/globalStatePortal";

interface GlobalStateComponentsProps { }

/* TODO: Add any global components you might need here. They will be inserted inside of the Redux provider in the root layout. This should only be used for components that can be used application wide, like toast components, menus toggled by global state, etc... */
/* If you application doesn't have any such components, you can safely delete this file. */
const GlobalStateComponents = (props: GlobalStateComponentsProps) => {
    return (
        <GlobalStatePortal>
            <></>
        </GlobalStatePortal>
    );
};

GlobalStateComponents.displayName = "GlobalStateComponents";

export default GlobalStateComponents;
