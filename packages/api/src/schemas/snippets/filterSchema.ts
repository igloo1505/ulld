import { Technologies } from "@ulld/database/internalDatabaseTypes";
import { z } from "zod";


export const snippetFilterSchema = z
    .object({
        language: z.nativeEnum(Technologies).optional(),
        query: z.string().optional()
    })


export type SnippetFilterParam = z.input<typeof snippetFilterSchema>
