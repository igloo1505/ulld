import { z } from "zod";
import shikiLanguages from "@ulld/utilities/shikiLanguages";

export const snippetFilterSchema = z
    .object({
        language: z.enum(shikiLanguages).optional(),
        query: z.string().optional()
    })


export type SnippetFilterParam = z.input<typeof snippetFilterSchema>
