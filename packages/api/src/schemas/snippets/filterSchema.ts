import { z } from "zod";
import shikiLanguageList from "@ulld/utilities/shikiLanguages"

export const snippetFilterSchema = z
    .object({
        language: z.string().optional().refine((x) => {
        if(typeof x === "string" && !shikiLanguageList.includes(x as typeof shikiLanguageList[number])){
            return false
        }
        return true
    }),
        query: z.string().optional()
    })


export type SnippetFilterParam = z.input<typeof snippetFilterSchema>
