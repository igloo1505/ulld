// ULLD: protected-path pageFor:bibliography/BibliographyPage
import BibEntryDetailSheetTemplate from "#/components/slots/bibliography/bibEntryDetailsSheet";
import LoadingIndicator from "#/components/slots/ui/loadingIndicator";
import BibliographyPage, {
    PageProps,
} from "#/corePages/bibliography/bibliography";
import { serverClient } from "@ulld/api/serverClient";
import { PickPageParams } from "@ulld/utilities/types";
import React from "react";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

interface BibliographyPageTemplateProps extends PickPageParams<PageProps> { }

const BibliographyPageTemplate = async (
    props: BibliographyPageTemplateProps,
) => {
    const bib = await serverClient.bibliography.getPrismaBib();

    return (
        <>
            <DisableBookmark />
            <BibliographyPage
                {...props}
                databaseBib={
                    bib as Awaited<
                        ReturnType<typeof serverClient.bibliography.getPrismaBib>
                    >
                }
                loadingIndicator={LoadingIndicator}
                bibEntryDetailsSheet={BibEntryDetailSheetTemplate}
            />
        </>
    );
};

BibliographyPageTemplate.displayName = "BibliographyPageTemplate";

export default BibliographyPageTemplate;
