import { autoSetting } from "@prisma/client"
import { DocTypes } from "@ulld/configschema/configUtilityTypes/docTypes"
import {Route} from "next"

// TODO: Remove this. This was moved to packages/utilities/src/types/general.ts
export interface SearchAllParams {
    query?: string
    tags?: string[]
    categories?: DocTypes[]
    subjects?: string[]
    topics?: string[]
    citations?: string[]
    tagRegex?: RegExp[]
    equationId?: string
    sequentialId?: string
    perPage?: string
    take?: string
    page?: string
    remote?: boolean
}


export const autoSettingSearchAllParamMap: { [k in autoSetting]: keyof SearchAllParams } = {
    tag: "tags",
    topic: "topics",
    subject: "subjects"
}



export const formatSearchAllParams = <T extends object>(queryParams: Partial<T>): string => {
    let params = new URLSearchParams()
    for (const k in queryParams) {
        if (typeof queryParams[k as keyof typeof queryParams] === "string") {
            params.append(k, queryParams[k as keyof typeof queryParams] as string)
        }
        if (typeof queryParams[k as keyof typeof queryParams] === "boolean") {
            params.append(k, queryParams[k as keyof typeof queryParams] ? "true" : "false")
        }
        if (Array.isArray(queryParams[k as keyof typeof queryParams])) {
            for (const p of queryParams[k as keyof typeof queryParams] as any) {
                params.append(k, p as string)
            }
        }
    }
    return params.toString()
}


export interface WithFSSearchParams {
    params: {
        slug: string[] | string
    }
    searchParams?: SearchAllParams & {
        fs?: boolean | string | undefined | null
        vid?: string
        time?: string
    }
}



const getSearchAllParams = (params: SearchAllParams) => {
    let query = new URLSearchParams()
    if (params.query) {
        query.set("query", params.query)
    }
    return query.toString()
}

export const getSearchAllUrl = (params: SearchAllParams) => `/searchAll?${getSearchAllParams(params)}` as Route
