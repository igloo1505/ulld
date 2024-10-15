import { z } from 'zod';
import { DietCreateManyInputSchema } from '../inputTypeSchemas/DietCreateManyInputSchema.js';
export const DietCreateManyArgsSchema = z.object({
    data: z.union([DietCreateManyInputSchema, DietCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default DietCreateManyArgsSchema;
