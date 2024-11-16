// Slot: UI/ComponentDocsListPage type:component propsExtends:ComponentDocsListPageProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import { ComponentDocsListPageProps } from "@ulld/ui/types";
import React from "react";

export interface PageProps extends ComponentDocsListPageProps { }

const ComponentDocsListPageTemplate = (props: PageProps) => {
    return <REPLACEME {...props} />;
};

ComponentDocsListPageTemplate.displayName = "ComponentDocsListPageTemplate";

export default ComponentDocsListPageTemplate;
