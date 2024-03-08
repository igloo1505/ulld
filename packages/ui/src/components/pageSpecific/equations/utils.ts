import { beArray } from '#/utils/plotting/arrayUtils'
import { paginationProps, sortDirProps } from '#/zod/local/zodUtils'
import { z } from 'zod'

export enum EquationOrderBy {
    title,
    createdAt
}

export const EquationSearchParamsSchema = z.object({
    tags: z.union([z.string(), z.string().array()]).transform(beArray).default([]),
    variables: z.union([z.string(), z.string().array()]).transform(beArray).default([]),
    query: z.string().optional(),
    value: z.string().optional(),
    orderBy: z.nativeEnum(EquationOrderBy).default(EquationOrderBy.title).optional()
}).merge(paginationProps).merge(sortDirProps)


export type EquationSearchParams = z.infer<typeof EquationSearchParamsSchema>


export const formatEquationSearchParams = (_query: Partial<EquationSearchParams>): string => {
    let query = EquationSearchParamsSchema.parse(_query)
    let params = new URLSearchParams()
    if (query.tags) {
        query.tags.forEach((t) => params.append("tags", t))
    }
    if (query.variables) {
        query.variables.forEach((t) => params.append("variables", t))
    }
    typeof query.value !== "undefined" && params.set("value", query.value)
    return params.toString()
}
