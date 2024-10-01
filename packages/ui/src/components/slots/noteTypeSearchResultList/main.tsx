import React from "react";
import { NoteTypeSearchResultListProps } from "../../../types/general";


const NoteTypeSearchResultList = ({notes}: NoteTypeSearchResultListProps) => {
    return (
        <div
            className={"w-full flex flex-col justify-start items-center gap-6 mt-8"}
        >
            {notes}
        </div>
    );
};

NoteTypeSearchResultList.displayName = "NoteTypeSearchResultList";

export default NoteTypeSearchResultList;
