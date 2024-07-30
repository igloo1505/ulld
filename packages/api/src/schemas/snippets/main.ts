import { z } from "zod";
import shikiLanguages from "@ulld/utilities/shikiLanguages";

export const SnippetCreatekeywordsInputObjectSchema = z
    .object({
        set: z.string().array(),
    })
    .strict();

export const TechnologiesSchema = z.enum(shikiLanguages);

export const SnippetCreateInputObjectSchema = z
    .object({
        content: z.string(),
        description: z.string(),
        keywords: z
            .union([
                z.lazy(() => SnippetCreatekeywordsInputObjectSchema),
                z.string().array(),
            ])
            .optional(),
        language: z.lazy(() => TechnologiesSchema),
        id: z.number().int().optional(),
    })
    .strict();
