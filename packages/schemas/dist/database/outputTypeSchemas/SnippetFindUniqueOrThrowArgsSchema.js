import { z } from 'zod';
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
export const SnippetFindUniqueOrThrowArgsSchema = z.object({
    select: SnippetSelectSchema.optional(),
    where: SnippetWhereUniqueInputSchema,
}).strict();
export default SnippetFindUniqueOrThrowArgsSchema;
