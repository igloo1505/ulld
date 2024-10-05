import React from "react";
import NoteTypeSearchResultList from "../../components/slots/noteTypeSearchResultList/main";
import NotePageWrapper from "../../components/slots/noteTypePageWrapper/main";
import NoteTypeSecondaryFilter from "../../components/slots/noteTypeSecondaryFilter/main";
import { NoteDetailsSheet } from "../../components/toc/noteDetailsSheet";
import * as testData from "@ulld/utilities/databaseTestData";
import NotesSearchResultsList from "../../components/slots/noteSearchResultsList/main";
import NoteSummaryWrapper from "../../components/slots/noteSummarySearchResult/main";
import { mdxNoteSummaryWithMdxTransforms } from "../../../../api/src/classes/prismaMdxRelations/schemas/withMdxTransforms";

interface SearchResultTestPageProps {
    params: any;
    searchParams: any;
}

const testTags =
    "Nunc dignissim tempor, tempor vulputate felis, suspendisse ipsum sit vestibulum In massa elementum, neque vitae rutrum, lectus lacus eu porttitor Tempor tempus lectus, magna sed vitae, turpis cras leo nulla Convallis aenean vestibulum, ac nullam consectetur, massa nisl eu nullam Laoreet convallis lectus, velit etiam dictumst, consequat pharetra consectetur elementum Metus consequat ultricies, tristique vitae elit, quisque eu nunc efficitur Metus sit sit, convallis dignissim in, fermentum eget sed pulvinar Suspendisse nibh suscipit, ultrices faucibus duis, dapibus facilisis elementum nunc Eget nullam lacus, tempor ipsum proin, dignissim magna suspendisse vitae Duis etiam lacus, nibh sit metus, vel vestibulum vestibulum viverra".split(
        " ",
    );

const mapTempArray = <T extends unknown>(n: number, cb: () => T): T[] => {
    return Array(n)
        .fill(0)
        .map(() => cb());
};

const getTestTaggable = (n: number) => {
    return mapTempArray(
        n,
        () => testTags[Math.floor(Math.random() * testTags.length)],
    );
};

const getFakeNotes = (n: number) => {
    return mapTempArray(n, () => testData.fakeMdxNote());
};

const notes = mdxNoteSummaryWithMdxTransforms.array().parse(getFakeNotes(20));

const SearchResultTestPage = (props: SearchResultTestPageProps) => {
    return (
        <NotePageWrapper {...props} toc={NoteDetailsSheet}>
            <NoteTypeSecondaryFilter
                data={{
                    tags: getTestTaggable(20),
                    subjects: [],
                    topics: [],
                }}
                noteType={{
                    id: "physics",
                    matchWeight: 50,
                    fs: "/physics",
                    urlQuery: {},
                    keywords: [],
                    label: "Physics",
                    autoTag: [],
                    autoTopic: [],
                    autoSubject: [],
                    UI: {
                        styles: {
                            dark: {},
                            light: {},
                        },
                    },
                    icon: "physics",
                    inSidebar: false,
                    inNavbar: false,
                    docType: "physics",
                    url: "/physics",
                }}
            />
            <NoteTypeSearchResultList
                notes={
                    <NotesSearchResultsList>
                        {notes.map((item, i) => (
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
