import { z } from 'zod';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema.js';
export const SnippetDeleteManyArgsSchema = z.object({
    where: SnippetWhereInputSchema.optional(),
}).strict();
export default SnippetDeleteManyArgsSchema;
