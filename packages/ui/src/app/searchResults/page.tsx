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
import { paginateTemplateString } from "@ulld/utilities/paginationUtils";
import { searchAllParamsToSearchParamsClass } from "@ulld/utilities/searchUtils";
import { getFilteredSearchResults } from "@ulld/api/getFilteredSearchResults";
import { readDevelopmentAppConfig } from "@ulld/developer/readAppConfig";

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

const SearchResultTestPage = async (props: SearchResultTestPageProps) => {
  const appConfig = await readDevelopmentAppConfig();
  const { docTypeData, sp, filter, secondaryData } = await getFilteredSearchResults({
    categoryId: "physics",
    appConfig,
  });
  return (
    <NotePageWrapper {...props} toc={NoteDetailsSheet}>
      <NoteTypeSecondaryFilter
        {...props}
        data={{
          ...secondaryData,
          /* tags: getTestTaggable(20), */
          subjects: [],
          topics: [],
        }}
        noteType={docTypeData}
      />
      <NoteTypeSearchResultList
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
    </NotePageWrapper>
  );
};

SearchResultTestPage.displayName = "SearchResultTestPage";

export default SearchResultTestPage;
