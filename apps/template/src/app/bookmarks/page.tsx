// ULLD: protected-path pageFor:UI/BookmarksPage
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";
import React from "react";
import BookmarkResultsPage from "#/components/slots/search/bookmarksPage";
import { SearchAllParams } from "@ulld/utilities/types";
import NoteSummaryItem from "#/components/slots/search/items/noteSummary";
import appConfig from "appConfig";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

interface BookmarksPageProps {
    searchParams: SearchAllParams;
}

const BookmarksPage = async ({ searchParams }: BookmarksPageProps) => {
    const filter = new NoteFilter("all");
    const notes = await filter.getBookmarked(appConfig as AppConfigSchemaOutput);

    return (
        <>
            <DisableBookmark />
            <BookmarkResultsPage
                notes={
                    <>
                        {notes.map((n, i) => {
                            return (
                                <NoteSummaryItem index={i} item={n} searchType="bookmarked" />
                            );
                        })}
                    </>
                }
            />
        </>
    );
};

BookmarksPage.displayName = "BookmarksPage";

export default BookmarksPage;
