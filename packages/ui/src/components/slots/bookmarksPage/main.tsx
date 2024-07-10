import React from "react";
import { BookmarksResultsPageProps } from "../../../types/general";

const BookmarksPage = ({notes}: BookmarksResultsPageProps) => {
    return <div className={"w-full h-fit min-h-screen flex flex-col justify-start items-center"}>
        {notes}
    </div>
};

BookmarksPage.displayName = "BookmarksPage";

export default BookmarksPage;
