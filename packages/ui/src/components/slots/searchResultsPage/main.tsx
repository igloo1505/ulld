import React from "react";
import { SearchResultsPageProps } from "../../../types/general";

const SearchResultsPage = ({ notes, taskLists }: SearchResultsPageProps) => {
    return (
        <div className={"w-full space-y-6"}>
            <div className={"w-full h-fit"}>{taskLists}</div>
            <div className={"w-full h-fit"}>{notes}</div>
        </div>
    );
};

SearchResultsPage.displayName = "SearchResultsPage";

export default SearchResultsPage;
