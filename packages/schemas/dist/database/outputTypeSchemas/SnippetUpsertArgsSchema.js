import { z } from 'zod';
import { SnippetWhereUniqueInputSchema } from '../inputTypeSchemas/SnippetWhereUniqueInputSchema.js';
import { SnippetCreateInputSchema } from '../inputTypeSchemas/SnippetCreateInputSchema.js';
import { SnippetUncheckedCreateInputSchema } from '../inputTypeSchemas/SnippetUncheckedCreateInputSchema.js';
import { SnippetUpdateInputSchema } from '../inputTypeSchemas/SnippetUpdateInputSchema.js';
import { SnippetUncheckedUpdateInputSchema } from '../inputTypeSchemas/SnippetUncheckedUpdateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const SnippetSelectSchema = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    description: z.boolean().optional(),
    keywords: z.boolean().optional(),
    language: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const SnippetUpsertArgsSchema = z.object({
    select: SnippetSelectSchema.optional(),
    where: SnippetWhereUniqueInputSchema,
    create: z.union([SnippetCreateInputSchema, SnippetUncheckedCreateInputSchema]),
    update: z.union([SnippetUpdateInputSchema, SnippetUncheckedUpdateInputSchema]),
}).strict();
export default SnippetUpsertArgsSchema;
