import React from "react";
import { NotesSearchResultsListProps } from "../../../types/general";

const NotesSearchResultsList = ({ children }: NotesSearchResultsListProps) => {
    return (
        <div
            className={"w-full h-full flex flex-col justify-start items-center gap-4"}
        >
            {children}
        </div>
    );
};

NotesSearchResultsList.displayName = "NotesSearchResultsList";

export default NotesSearchResultsList;