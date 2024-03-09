import { Technologies } from "@ulld/database"
import { z } from "zod"

export const snippetValidator = z.object({
    id: z.number().int(),
    content: z.string(),
    description: z.string(),
    keywords: z.string().array().default([]),
    language: z.nativeEnum(Technologies)
})



export type SnippetListItemProps = z.output<typeof snippetValidator>


export interface SnippetFilterParams {
    language?: Technologies
    query?: string
}
