import { serverClient } from "@ulld/api/serverClient";
import { FC } from "react";
import { LoadingIndicatorProps } from "@ulld/ui/types";
import { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import type { BibEntry as PrismaBibEntry } from "@ulld/database/internalDatabaseTypes";

type BibliographyPageSearchParams = {};


export interface BibEntryDetailsProps {
    item?: BibEntry;
    close: () => void
}

export interface BibliographyPageProps<T extends object = {}> {
    prismaBib: Awaited<ReturnType<typeof serverClient.bibliography.getBib>>;
    searchParams: BibliographyPageSearchParams & T;
    loadingIndicator: FC<LoadingIndicatorProps>;
    bibEntryDetailsSheet: FC<BibEntryDetailsProps>;
}
