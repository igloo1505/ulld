import { autoSetting } from "@ulld/database"
import {Route} from "next"
import { SearchAllParams } from "@ulld/utilities/types"

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



// PRIORITY: Delete this fucking thing immediately. It does almost nothing, and there's a much better equivalent function called searchAllParamsToSearchParamsClass in the utilities package.
const getSearchAllParams = (params: SearchAllParams) => {
    let query = new URLSearchParams()
    if (params.query) {
        query.set("query", params.query)
    }
    return query.toString()
}

export const getSearchAllUrl = (params: SearchAllParams) => `/searchAll?${getSearchAllParams(params)}` as Route
