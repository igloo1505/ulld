import { useState } from "react";
import { useEventListener } from "./useEventListener";
import {
    getTocFromContent,
    TOCItemType,
} from "@ulld/utilities/getTocFromContent";

interface NoteDetailSheetEvent {
    title: string;
    tags: string[];
    quickLinkId?: string;
    headings: TOCItemType[];
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "show-note-detail-sheet": CustomEvent<NoteDetailSheetEvent>;
    }
}

export const showNoteDetailSheet = async (
    noteDetails: Omit<NoteDetailSheetEvent, "headings">,
    content: string,
) => {
    let headings = await getTocFromContent(content);
    window.dispatchEvent(
        new CustomEvent("show-note-detail-sheet", {
            detail: {
                ...noteDetails,
                headings,
            },
        }),
    );
};

export const useNoteDetailSheet = () => {
    const [noteDetails, setNoteDetails] = useState<null | NoteDetailSheetEvent>(
        null,
    );

    useEventListener("show-note-detail-sheet", (e) => {
        if (e.detail) {
            setNoteDetails(e.detail);
        }
    });

    return [noteDetails, () => setNoteDetails(null)] as [
        NoteDetailSheetEvent,
        () => void,
    ];
};
