import { z } from 'zod';
import { DietaryItemCreateManyInputSchema } from '../inputTypeSchemas/DietaryItemCreateManyInputSchema.js';
export const DietaryItemCreateManyArgsSchema = z.object({
    data: z.union([DietaryItemCreateManyInputSchema, DietaryItemCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default DietaryItemCreateManyArgsSchema;
