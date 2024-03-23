import { z } from 'zod'
import { Prisma, Technologies } from "@ulld/database/internalDatabaseTypes"


export const SnippetCreatekeywordsInputObjectSchema: z.ZodType<Prisma.SnippetCreatekeywordsInput> = z
    .object({
        set: z.string().array(),
    })
    .strict();


export const TechnologiesSchema = z.nativeEnum(Technologies);


const Schema: z.ZodType<Prisma.SnippetCreateInput> = z
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
        id: z.number().int().optional()
    })
    .strict();

export const SnippetCreateInputObjectSchema = Schema;
