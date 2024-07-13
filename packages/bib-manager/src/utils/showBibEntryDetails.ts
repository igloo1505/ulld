import type { BibEntry as PrismaBibEntry } from "@ulld/database/internalDatabaseTypes";

export const showBibEntryDetails = (entry: PrismaBibEntry) => {
    window.dispatchEvent(
        new CustomEvent("show-bib-entry-details", {
            detail: entry,
        }),
    );
};
