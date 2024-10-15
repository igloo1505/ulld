import { z } from 'zod';
import { SnippetCreateManyInputSchema } from '../inputTypeSchemas/SnippetCreateManyInputSchema.js';
export const SnippetCreateManyAndReturnArgsSchema = z.object({
    data: z.union([SnippetCreateManyInputSchema, SnippetCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default SnippetCreateManyAndReturnArgsSchema;
