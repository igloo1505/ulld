import { DocTypes } from "@ulld/configschema/configUtilityTypes/docTypes"


export interface SearchResult {
    title: string
    created?: Date | string
    summary?: string
    tags?: string[]
    type: DocTypes
}
