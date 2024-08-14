import { z } from "zod";
import { bundledLanguages } from "shiki"

export const snippetFilterSchema = z
    .object({
        language: z.string().optional().refine((x) => {
        if(typeof x === "string" && !Object.keys(bundledLanguages).includes(x)){
            return false
        }
        return true
    }),
        query: z.string().optional()
    })


export type SnippetFilterParam = z.input<typeof snippetFilterSchema>
