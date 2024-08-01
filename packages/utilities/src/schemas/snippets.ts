import { z } from "zod"
import shikiLanguageList, { ShikiLanguage } from "../shiki/languageList"

export const snippetValidator = z.object({
    id: z.number().int(),
    content: z.string(),
    description: z.string(),
    keywords: z.string().array().default([]),
    language: z.enum(shikiLanguageList)
})



export type SnippetListItemProps = z.output<typeof snippetValidator>


export interface SnippetFilterParams {
    language?: ShikiLanguage 
    query?: string
}
