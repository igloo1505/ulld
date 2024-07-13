import { useState } from "react";
import { useEventListener } from "./useEventListener";
import type { BibEntry as PrismaBibEntry } from "@ulld/database/internalDatabaseTypes";
import { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";

interface EventProps {
    entry: PrismaBibEntry | false;
}
declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "show-bib-entry-details": CustomEvent<EventProps>;
    }
}

export const useBibEntryDetailsDisplay = () => {
    const [item, setItem] = useState<BibEntry | false>(false);
    useEventListener("show-bib-entry-details", (e) => {
        if (e.detail.entry) {
            setItem(BibEntry.fromPrisma(e.detail.entry));
        } else {
            setItem(false);
        }
    });

    const close = () => {
        setItem(false);
    };

    return [item, setItem, close];
};
