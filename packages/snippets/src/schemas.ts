import { z } from "zod";
import supportedLanguages from "@ulld/utilities/shikiLanguages"


export const snippetSchema = z.object({
    id: z.number().int(),
    content: z.string(),
    description: z.string(),
    keywords: z.string().array().default([]),
    language: z.string().refine((w) => supportedLanguages.includes(w as any))
})


export type ValidatedSnippet = z.output<typeof snippetSchema>
