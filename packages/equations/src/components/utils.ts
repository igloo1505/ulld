import { paginationProps, sortDirProps } from '@ulld/state/searchParamSchemas/pagination/main'
import { ArrayUtilities } from '@ulld/utilities/arrayUtilities'
import { z } from 'zod'

export enum EquationOrderBy {
    title = "title",
    createdAt = "createdAt"
}

// TODO: Remove all imports of this location. This was moved to /packages/utilities/src/types/corePageProps.ts
export const equationSearchParamsSchema = z.object({
    tags: z.union([z.string(), z.string().array()]).transform(ArrayUtilities.beArray).default([]),
    variables: z.union([z.string(), z.string().array()]).transform(ArrayUtilities.beArray).default([]),
    query: z.string().optional(),
    value: z.string().optional(),
    orderBy: z.union([
        z.literal("title"),
        z.literal("createdAt"),
    ]).default("title")
}).merge(paginationProps).merge(sortDirProps)


export const equationSearchParamsToString = equationSearchParamsSchema.transform((query) => {
    let params = new URLSearchParams()
    if (query.tags) {
        query.tags.forEach((t) => params.append("tags", t))
    }
    if (query.variables) {
        query.variables.forEach((t) => params.append("variables", t))
    }
    typeof query.value !== "undefined" && params.set("value", query.value)
    return params.toString()
})



export type EquationSearchParamsInput = z.input<typeof equationSearchParamsSchema>
export type EquationSearchParamsOutput = z.output<typeof equationSearchParamsSchema>



export const formatEquationSearchParams = (data: z.input<typeof equationSearchParamsSchema>) => equationSearchParamsSchema.parse(data)
