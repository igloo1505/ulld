import { UniqueTaggables } from "@ulld/utilities/types"
import supportedLanguages from "@ulld/utilities/shikiLanguages"
import { ValidatedSnippet } from "./schemas"


export interface AddSnippetPageProps {
   existingTaggables: UniqueTaggables
}


export interface SnippetFilterParams {
    language?: typeof supportedLanguages[number]
    query?: string
}


export interface SnippetFilterProps {
    searchParams: SnippetFilterParams
}


export interface SnippetListInternalProps extends SnippetFilterProps {
   snippets: ValidatedSnippet[]
}
