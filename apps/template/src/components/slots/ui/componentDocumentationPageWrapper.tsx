// Slot: UI/ComponentDocumentationPageWrapper type:component propsExtends:ComponentDocWrapperProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import { ComponentDocWrapperProps } from "@ulld/ui/types";
import React from "react";

const ComponentDocPageWrapperTemplate = ({
    children,
    ...props
}: ComponentDocWrapperProps) => {
    return <REPLACEME {...props}>{children}</REPLACEME>;
};

ComponentDocPageWrapperTemplate.displayName = "ComponentDocPageWrapperTemplate";

export default ComponentDocPageWrapperTemplate;
