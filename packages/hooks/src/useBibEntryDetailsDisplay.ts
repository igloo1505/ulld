import { useRef, useState } from "react";
import { useEventListener } from "./useEventListener";
import type { BibEntry as PrismaBibEntry } from "@ulld/database";
import { BibEntry, BibEntryDataTableOutput } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import { client } from "@ulld/api/client";

interface EventProps {
    entry: PrismaBibEntry | BibEntry | false;
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "show-bib-entry-details": CustomEvent<EventProps>;
        "update-bib-entry-table-entry": CustomEvent<Partial<BibEntryDataTableOutput>>
        "show-bib-entry-details-by-id": CustomEvent<{ id: string }>;
    }
}

export const useBibEntryDetailsDisplay = () => {
    const [item, setItem] = useState<BibEntry | false>(false);
    const [loading, _setLoading] = useState(false);
    const isLoading = useRef<boolean>(false);

    const setLoading = (l: boolean) => {
        _setLoading(l);
        isLoading.current = l;
    };

    useEventListener("show-bib-entry-details", (e) => {
        if (e.detail.entry) {
            setItem(e.detail.entry instanceof BibEntry ? e.detail.entry : BibEntry.fromPrisma(e.detail.entry as PrismaBibEntry));
        } else {
            setItem(false);
        }
    });

    const gatherById = async (id: string) => {
        if (isLoading.current) return;
        setLoading(true);
        let res = await client.bibliography.getBibEntry.query(id);
        if (res) {
            setItem(res instanceof BibEntry ? res : BibEntry.fromPrisma({
                ...res as PrismaBibEntry,
                createdAt: typeof res.createdAt === "string" ? new Date(res.createdAt) : res.createdAt,
                lastAccess: typeof res.lastAccess === "string" ? new Date(res.lastAccess) : res.lastAccess,
            }));
        }
        setLoading(false);
    };

    useEventListener("show-bib-entry-details-by-id", (e) => {
        gatherById(e.detail.id);
    });

    const close = () => {
        setItem(false);
    };

    const updateBibEntry = (d: Partial<BibEntryDataTableOutput>) => {
        window.dispatchEvent(
            new CustomEvent("update-bib-entry-table-entry", {
                detail: d,
            }),
        );
    };

    return [item, setItem, close, loading, updateBibEntry] as [
        BibEntry | false,
        (newItem: BibEntry | false) => void,
        () => void,
        boolean,
        typeof updateBibEntry,
    ];
};
