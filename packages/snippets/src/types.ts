import { UniqueTaggables } from "@ulld/utilities/types";
import supportedLanguages from "@ulld/utilities/shikiLanguages";
import { ValidatedSnippet } from "./schemas";
import { serverClient } from "@ulld/api/serverClient";

export interface AddSnippetPageProps {
    existingTaggables: UniqueTaggables;
    editing?: null | Awaited<
        ReturnType<typeof serverClient.snippets.getSpecificSnippet>
    >;
}

export interface SnippetFilterParams {
    language?: (typeof supportedLanguages)[number];
    query?: string;
}

export interface SnippetFilterProps {
    searchParams: SnippetFilterParams;
}

export interface SnippetListInternalProps extends SnippetFilterProps {
    snippets: ValidatedSnippet[];
}
