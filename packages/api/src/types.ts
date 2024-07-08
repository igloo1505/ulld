import { autoSetting } from "@ulld/database/internalDatabaseTypes";

import { MdxNoteSummaryOutputWithMdxTransforms } from "./classes/prismaMdxRelations/schemas/withMdxTransforms";

export interface SearchResultsPageProps {
    notes: MdxNoteSummaryOutputWithMdxTransforms[];
}


export type BookmarksResultsPageProps = Pick<SearchResultsPageProps, "notes">

export type { MdxNoteSummaryOutputWithMdxTransforms };
