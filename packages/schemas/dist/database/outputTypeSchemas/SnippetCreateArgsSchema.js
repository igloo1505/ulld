import { z } from 'zod';
import { SnippetCreateInputSchema } from '../inputTypeSchemas/SnippetCreateInputSchema.js';
import { SnippetUncheckedCreateInputSchema } from '../inputTypeSchemas/SnippetUncheckedCreateInputSchema.js';
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
export const SnippetCreateArgsSchema = z.object({
    select: SnippetSelectSchema.optional(),
    data: z.union([SnippetCreateInputSchema, SnippetUncheckedCreateInputSchema]),
}).strict();
export default SnippetCreateArgsSchema;
