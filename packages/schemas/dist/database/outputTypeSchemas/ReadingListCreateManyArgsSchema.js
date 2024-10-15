import { z } from 'zod';
import { ReadingListCreateManyInputSchema } from '../inputTypeSchemas/ReadingListCreateManyInputSchema.js';
export const ReadingListCreateManyArgsSchema = z.object({
    data: z.union([ReadingListCreateManyInputSchema, ReadingListCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default ReadingListCreateManyArgsSchema;
