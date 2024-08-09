import React from "react";
import { BibliographyPageProps } from "../../../types";
import BibliographyPageClient from "./bibliographyPageClient";

const BibliographyPage = ({
    loadingIndicator: LoadingIndicator,
    bibEntryDetailsSheet: BibEntryDetailsSheet,
    ...props
}: BibliographyPageProps) => {
    return (
        <>
            <BibliographyPageClient
                {...props}
                loadingIndicator={<LoadingIndicator loading={true} />}
            />
            <BibEntryDetailsSheet />
        </>
    );
};

BibliographyPage.displayName = "BibliographyPage";

export default BibliographyPage;
