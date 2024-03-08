import {z} from 'zod'
import {makeArrayTransform} from "@ulld/utilities"
import { paginationProps, sortDirProps } from '../pagination/main'

const equationOrderBy = z.union([
    z.literal("title"),
    z.literal("createdAt")
])

export type EquationOrderBy = z.input<typeof equationOrderBy>

export const equationSearchParamsSchema = z.object({
    tags: z.union([z.string(), z.string().array()]).transform(makeArrayTransform).default([]),
    variables: z.union([z.string(), z.string().array()]).transform(makeArrayTransform).default([]),
    query: z.string().optional(),
    value: z.string().optional(),
    orderBy: equationOrderBy
}).merge(paginationProps).merge(sortDirProps)

