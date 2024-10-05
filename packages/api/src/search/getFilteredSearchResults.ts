import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { NoteFilter } from "../classes/search/noteFilter";
import { SearchAllParams } from "@ulld/utilities/types";
import { paginateTemplateString } from "@ulld/utilities/paginationUtils";
import { searchAllParamsToSearchParamsClass } from "@ulld/utilities/searchUtils";


interface GetFilteredSearchResultsProps {
    appConfig: AppConfigSchemaOutput
    categoryId: string
    searchParams: SearchAllParams
}


export const getFilteredSearchResults = async ({appConfig, searchParams, categoryId}: GetFilteredSearchResultsProps) => {
    const docTypeData = appConfig.noteTypes.find((n) => n.id === categoryId);
    const filter = new NoteFilter(categoryId, searchParams);
    await filter.defaultCategorySearch(true, appConfig as AppConfigSchemaOutput);
    let sp = searchAllParamsToSearchParamsClass(searchParams)
    sp.set("page", paginateTemplateString)
    let secondaryData = await filter.getQuerySecondaryData(appConfig as AppConfigSchemaOutput)
    return {
        docTypeData, 
        secondaryData, 
        filter,
        sp
    }
}
