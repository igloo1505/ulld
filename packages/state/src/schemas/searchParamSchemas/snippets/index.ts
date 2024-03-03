import { Technologies } from "@prisma/client"
import {z} from 'zod'

export const snippetFilterParamSchema = z.object({
    language: z.nativeEnum(Technologies).optional(),
    query: z.string().optional()
})

export type SnippetFilterParams = z.output<typeof snippetFilterParamSchema>
