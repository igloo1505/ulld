import { UniqueTaggables } from "@ulld/utilities/types";
import supportedLanguages from "@ulld/utilities/shikiLanguages";
import { ValidatedSnippet } from "./schemas";
import { serverClient } from "@ulld/api/serverClient";
import { ComponentType, ReactNode } from "react";

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

export interface SnippetListProps extends SnippetFilterProps {
    snippets: ValidatedSnippet[];
}

export interface SnippetsPageProps {
    filter: ReactNode
    list: ReactNode
}
