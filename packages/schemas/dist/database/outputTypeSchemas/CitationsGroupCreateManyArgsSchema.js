import { z } from 'zod';
import { CitationsGroupCreateManyInputSchema } from '../inputTypeSchemas/CitationsGroupCreateManyInputSchema.js';
export const CitationsGroupCreateManyArgsSchema = z.object({
    data: z.union([CitationsGroupCreateManyInputSchema, CitationsGroupCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default CitationsGroupCreateManyArgsSchema;
