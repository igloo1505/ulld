import { z } from 'zod';
import { SnippetUpdateInputSchema } from '../inputTypeSchemas/SnippetUpdateInputSchema.js';
import { SnippetUncheckedUpdateInputSchema } from '../inputTypeSchemas/SnippetUncheckedUpdateInputSchema.js';
import { SnippetWhereUniqueInputSchema } from '../inputTypeSchemas/SnippetWhereUniqueInputSchema.js';
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
export const SnippetUpdateArgsSchema = z.object({
    select: SnippetSelectSchema.optional(),
    data: z.union([SnippetUpdateInputSchema, SnippetUncheckedUpdateInputSchema]),
    where: SnippetWhereUniqueInputSchema,
}).strict();
export default SnippetUpdateArgsSchema;
