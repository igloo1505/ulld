import { z } from 'zod';
import { TopicCreateManyInputSchema } from '../inputTypeSchemas/TopicCreateManyInputSchema.js';
export const TopicCreateManyAndReturnArgsSchema = z.object({
    data: z.union([TopicCreateManyInputSchema, TopicCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default TopicCreateManyAndReturnArgsSchema;
