import React from "react";
import { NoteTypeSearchResultListProps } from "../../../types/general";
import cn from "@ulld/utilities/cn";


const NoteTypeSearchResultList = ({notes, secondaryData: sd}: NoteTypeSearchResultListProps) => {
    const hasTaggableLists = Boolean(sd.subjects.length || sd.tags.length || sd.topics.length)
    return (
        <div
            className={cn("w-full flex flex-col justify-start items-center gap-6 mb-8", hasTaggableLists ? "mt-4" : "mt-8")}
        >
            {notes}
        </div>
    );
};

NoteTypeSearchResultList.displayName = "NoteTypeSearchResultList";

export default NoteTypeSearchResultList;
