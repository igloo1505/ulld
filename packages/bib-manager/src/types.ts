import type { serverClient } from "@ulld/api/serverClient";
import { FC } from "react";
import type { LoadingIndicatorProps } from "@ulld/ui/types";
import type { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";


type BibliographyPageSearchParams = {};

export interface BibEntryDetailsProps {};

export interface BibliographyPageProps<T extends object = {}> {
    databaseBib: Awaited<ReturnType<typeof serverClient.bibliography.getPrismaBib>>;
    searchParams: BibliographyPageSearchParams & T;
    loadingIndicator: FC<LoadingIndicatorProps>;
    bibEntryDetailsSheet: FC<BibEntryDetailsProps>;
}


export interface ExtendedFrontMatter {
    citations: BibEntry[];
    citationsListOrder: string[];
}
