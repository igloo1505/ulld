// ULLD: protected-path pageFor:UI/SearchResultsPage
import React from "react";
import { SearchAllParams } from "@ulld/utilities/types";
import SearchResultsPage from "#/components/slots/search/searchResults";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";
import PaginationGroup from "#/components/slots/ui/pagination";
import { paginateTemplateString } from "@ulld/utilities/paginationUtils";
import {
    getSearchType,
    getTaggablesFromSearchAllParams,
    searchAllParamsToSearchParamsClass,
} from "@ulld/utilities/searchUtils";
import NotesSearchResultsListComponent from "#/components/slots/search/lists/noteSearchResultsList";
import NoteSummaryItem from "#/components/slots/search/items/noteSummary";
import TaskListSearchResultComponent from "#/components/slots/search/lists/taskListSearchResults";
import TaskListSearchResult from "#/components/slots/search/items/taskListSearchResult";
import { serverClient } from "#/trpc/mainServer";
import appConfig from "appConfig";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

interface SearchAllPageTemplateProps {
    searchParams: SearchAllParams;
}


const SearchAllPageTemplate = async (props: SearchAllPageTemplateProps) => {
    const filter = new NoteFilter("all", props.searchParams);
    await filter.getResults(appConfig as AppConfigSchemaOutput);
    let sp = searchAllParamsToSearchParamsClass(props.searchParams);
    sp.set("page", paginateTemplateString);
    const searchType = getSearchType(props.searchParams);
    const taskLists = await serverClient.toDo.findListsByTaggables(
        getTaggablesFromSearchAllParams(props.searchParams),
    );

    return (
        <>
            <DisableBookmark />
            <div className={"w-full relative"}>
                <SearchResultsPage
                    notes={
                        <NotesSearchResultsListComponent>
                            {filter.notes.map((item, i) => (
                                <NoteSummaryItem
                                    key={`note-${item.id}`}
                                    item={item}
                                    index={i}
                                    searchType={searchType}
                                />
                            ))}
                        </NotesSearchResultsListComponent>
                    }
                    taskLists={
                        <TaskListSearchResultComponent resultCount={taskLists.length}>
                            {taskLists.map((t, i) => (
                                <TaskListSearchResult
                                    item={t}
                                    index={i}
                                    totalFound={taskLists.length}
                                    key={`task-list-result-${i}`}
                                />
                            ))}
                        </TaskListSearchResultComponent>
                    }
                /* equations={[]} */
                />
                <PaginationGroup
                    currentPage={
                        props.searchParams?.page ? parseInt(props.searchParams.page) : 1
                    }
                    totalItems={filter.totalFound}
                    itemsPerPage={filter.perPage}
                    hrefTemplate={`/searchAll?${sp.toString()}`}
                />
            </div>
        </>
    );
};

SearchAllPageTemplate.displayName = "SearchAllPageTemplate";

export default SearchAllPageTemplate;
