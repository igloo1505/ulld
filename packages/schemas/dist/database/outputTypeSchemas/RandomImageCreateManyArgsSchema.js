import { z } from 'zod';
import { RandomImageCreateManyInputSchema } from '../inputTypeSchemas/RandomImageCreateManyInputSchema.js';
export const RandomImageCreateManyArgsSchema = z.object({
    data: z.union([RandomImageCreateManyInputSchema, RandomImageCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default RandomImageCreateManyArgsSchema;
