import type { BibEntry as PrismaBibEntry } from "@ulld/database/internalDatabaseTypes";


export type ShowBibEntryDetailsProps = Omit<PrismaBibEntry, "BibId"> & {BibId?: string | null | undefined}

export const showBibEntryDetails = (entry: ShowBibEntryDetailsProps) => {
    window.dispatchEvent(
        new CustomEvent("show-bib-entry-details", {
            detail: { entry },
        }),
    );
};
