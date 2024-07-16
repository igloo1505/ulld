import { serverClient } from "@ulld/api/serverClient";
import { FC } from "react";
import { LoadingIndicatorProps } from "@ulld/ui/types";
import { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";


type BibliographyPageSearchParams = {};


export interface BibEntryDetailsProps {
    item?: BibEntry;
    close: () => void
}

export interface BibliographyPageProps<T extends object = {}> {
    databaseBib: Awaited<ReturnType<typeof serverClient.bibliography.getPrismaBib>>;
    searchParams: BibliographyPageSearchParams & T;
    loadingIndicator: FC<LoadingIndicatorProps>;
    bibEntryDetailsSheet: FC<BibEntryDetailsProps>;
}
