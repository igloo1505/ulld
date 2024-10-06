import React from "react";
import NoteTypeSearchResultList from "../../components/slots/noteTypeSearchResultList/main";
import NotePageWrapper from "../../components/slots/noteTypePageWrapper/main";
import NoteTypeSecondaryFilter from "../../components/slots/noteTypeSecondaryFilter/main";
import { NoteFilter } from "@ulld/api/classes/search/noteFilter";
import { NoteDetailsSheet } from "../../components/toc/noteDetailsSheet";
import * as testData from "@ulld/utilities/databaseTestData";
import NotesSearchResultsList from "../../components/slots/noteSearchResultsList/main";
import NoteSummaryWrapper from "../../components/slots/noteSummarySearchResult/main";
import { mdxNoteSummaryWithMdxTransforms } from "../../../../api/src/classes/prismaMdxRelations/schemas/withMdxTransforms";
import appConfig from "../../../appConfig.ulld.json";
import { getFilteredSearchResults } from "@ulld/api/getFilteredSearchResults";
import { readDevelopmentAppConfig } from "@ulld/developer/readAppConfig";
import PaginationGroup from "../../components/slots/pagination/main";

interface SearchResultTestPageProps {
  params: any;
  searchParams: any;
}

const mapTempArray = <T extends unknown>(n: number, cb: () => T): T[] => {
  return Array(n)
    .fill(0)
    .map(() => cb());
};

const getTestTaggable = (n: number) => {
  return mapTempArray(n, () => testData.fakeTaggableString());
};

/* const getFakeNotes = (n: number) => { */
/*     return mapTempArray(n, () => testData.fakeMdxNoteComplete()); */
/* }; */

/* const notes = mdxNoteSummaryWithMdxTransforms.array().parse(getFakeNotes(20)); */

const baseUrl = "/physics";

const SearchResultTestPage = async (props: SearchResultTestPageProps) => {
  const appConfig = readDevelopmentAppConfig();

  const {
    docTypeData,
    sp,
    filter,
    secondaryData: _secondaryData,
  } = await getFilteredSearchResults({
    categoryId: "physics",
    appConfig,
    searchParams: props.searchParams,
  });

  const secondaryData: typeof _secondaryData = {
    tags: [],
    topics: [],
    subjects: [],
    /* tags: getTestTaggable(20), */
    /* subjects: getTestTaggable(6), */
    /* topics: getTestTaggable(4), */
  };

  return (
    <NotePageWrapper {...props} toc={NoteDetailsSheet}>
      <NoteTypeSecondaryFilter
        {...props}
        data={secondaryData}
        noteType={docTypeData}
      />
      <NoteTypeSearchResultList
        secondaryData={secondaryData}
        notes={
          <NotesSearchResultsList>
            {filter.notes.map((item, i) => (
              <NoteSummaryWrapper
                key={`note-${item.id}`}
                item={item}
                index={i}
                searchType={"byNoteType"}
              />
            ))}
          </NotesSearchResultsList>
        }
      />
      <PaginationGroup
        currentPage={
          props.searchParams?.page ? parseInt(props.searchParams.page) : 1
        }
        totalItems={filter.totalFound}
        itemsPerPage={filter.perPage}
        hrefTemplate={`${baseUrl}?${sp.toString()}`}
        implementationType="noteSearchResult"
      />
    </NotePageWrapper>
  );
};

SearchResultTestPage.displayName = "SearchResultTestPage";

export default SearchResultTestPage;
