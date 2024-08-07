import React from "react";
import { NotesSearchResultsListProps } from "../../../types/general";

const NotesSearchResultsList = ({ children }: NotesSearchResultsListProps) => {
    return (
        <div
            className={"w-full h-full flex flex-col justify-start items-center lg:grid lg:grid-cols-2 gap-4 px-4 md:px-8"}
        >
            {children}
        </div>
    );
};

NotesSearchResultsList.displayName = "NotesSearchResultsList";

export default NotesSearchResultsList;
