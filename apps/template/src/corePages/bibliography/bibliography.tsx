// Slot: bibliography/BibliographyPage type:page propsExtends:BibliographyPageProps
import React from "react";
import { BibliographyPageProps } from "@ulld/bib-manager/types";
import REPLACEME from "#/components/REPLACEMEcomponent";

export interface PageProps extends BibliographyPageProps { }

const BibliographyPageTemplate = (props: PageProps) => {
    return <REPLACEME {...props} />;
};

BibliographyPageTemplate.displayName = "REPLACEME";

export default BibliographyPageTemplate;
