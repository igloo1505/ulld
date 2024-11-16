import React from "react";
import NoteTypeSearchResultList from "#/components/notePageComponents/searchResultList";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";
import { NoteTypePageProps } from "@ulld/utilities/types";
import appConfig from "appConfig";
import NotePageWrapperTemplate from "#/components/notePageComponents/pageContainer";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import NoteSummaryItem from "#/components/slots/search/items/noteSummary";
import NotesSearchResultsListComponent from "#/components/slots/search/lists/noteSearchResultsList";
import PaginationGroup from "#/components/slots/ui/pagination";
import { paginateTemplateString } from "@ulld/utilities/paginationUtils";
import { searchAllParamsToSearchParamsClass } from "@ulld/utilities/searchUtils";
import NoteTypeSecondaryFilterTemplate from "#/components/notePageComponents/secondaryNoteTypeFilter";
import { notFound } from "next/navigation";

const categoryId: string = "dailyNote";

const baseUrl: string = "/dailyNote"

const MathPage = async (props: NoteTypePageProps) => {
    const docTypeData = appConfig.noteTypes.find((n) => n.id === categoryId);
    const filter = new NoteFilter(categoryId, props?.searchParams);
    await filter.defaultCategorySearch(true, appConfig as AppConfigSchemaOutput);
    let sp = searchAllParamsToSearchParamsClass(props.searchParams)
    sp.set("page", paginateTemplateString)
    let secondaryData = await filter.getQuerySecondaryData(appConfig as AppConfigSchemaOutput)

    if(!docTypeData){
        return notFound();
    }

    return (
        <NotePageWrapperTemplate
            {...props}
            docTypeData={docTypeData as AppConfigSchemaOutput["noteTypes"][number]}
        >
            <NoteTypeSecondaryFilterTemplate 
                {...props}
                data={secondaryData}
                noteType={docTypeData as AppConfigSchemaOutput["noteTypes"][number]}
            />
            <NoteTypeSearchResultList
                notes={
                    <NotesSearchResultsListComponent>
                        {filter.notes.map((item, i) => (
                            <NoteSummaryItem
                                key={`note-${item.id}`}
                                item={item}
                                index={i}
                                searchType={"byNoteType"}
                            />
                        ))}
                    </NotesSearchResultsListComponent>
                }
            />
            <PaginationGroup 
                currentPage={props.searchParams?.page ? parseInt(props.searchParams.page) : 1}
                totalItems={filter.totalFound}
                itemsPerPage={filter.perPage}
                hrefTemplate={`${baseUrl}?${sp.toString()}`}
            />
        </NotePageWrapperTemplate>
    );
};

MathPage.displayName = "MathPage";

export default MathPage;
