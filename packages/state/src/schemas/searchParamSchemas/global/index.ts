import { getZodArrayUnionSchema, paginationProps } from "@ulld/utilities"
import {z} from 'zod'
import { zodDocTypeInput } from "@ulld/config"

export const searchAllParamsSchema = z.object({
    query: z.string().optional(),
    categories: getZodArrayUnionSchema(zodDocTypeInput).optional(),
    tags: getZodArrayUnionSchema(z.string()).optional(),
    topics: getZodArrayUnionSchema(z.string()).optional(),
    subjects: getZodArrayUnionSchema(z.string()).optional(),
    equationId: z.coerce.number().int().optional(),
    sequentialId: z.coerce.number().int().optional(),
}).merge(paginationProps)


export type SearchAllParams = z.output<typeof searchAllParamsSchema>
