import { useRef, useState } from "react";
import { useEventListener } from "./useEventListener";
import type { BibEntry as PrismaBibEntry } from "@ulld/database/internalDatabaseTypes";
import { BibEntry } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { client } from "@ulld/api/client";

interface EventProps {
    entry: PrismaBibEntry | false;
}
declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "show-bib-entry-details": CustomEvent<EventProps>;
    }

    interface WindowEventMap {
        "show-bib-entry-details-by-id": CustomEvent<{ id: string }>;
    }
}

export const useBibEntryDetailsDisplay = () => {
    const [item, setItem] = useState<BibEntry | false>(false);
    const [loading, _setLoading] = useState(false)
    const isLoading = useRef<boolean>(false);

    const setLoading = (l: boolean) => {
           _setLoading(l) 
        isLoading.current = l
        }

    useEventListener("show-bib-entry-details", (e) => {
        if (e.detail.entry) {
            setItem(BibEntry.fromPrisma(e.detail.entry));
        } else {
            setItem(false);
        }
    });

    const gatherById = async (id: string) => {
        if (isLoading.current) return;
        setLoading(true)
        let res = await client.bibliography.getBibEntry.query(id);
        setItem(res);
        setLoading(false)
    };

    useEventListener("show-bib-entry-details-by-id", (e) => {
        gatherById(e.detail.id);
    });

    const close = () => {
        setItem(false);
    };

    return [item, setItem, close, loading] as [
        BibEntry | false,
        (newItem: BibEntry | false) => void,
        () => void,
        boolean
    ];
};
