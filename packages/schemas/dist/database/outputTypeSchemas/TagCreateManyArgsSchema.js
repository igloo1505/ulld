import { z } from 'zod';
import { TagCreateManyInputSchema } from '../inputTypeSchemas/TagCreateManyInputSchema.js';
export const TagCreateManyArgsSchema = z.object({
    data: z.union([TagCreateManyInputSchema, TagCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default TagCreateManyArgsSchema;
