import { Technologies } from "@prisma/client";
import { z } from "zod";
import { SnippetFilterParams } from "@ulld/state"


export const snippetFilterSchema: z.ZodType<SnippetFilterParams> = z
    .object({
        language: z.nativeEnum(Technologies).optional(),
        query: z.string().optional()
    })
    .strict();

