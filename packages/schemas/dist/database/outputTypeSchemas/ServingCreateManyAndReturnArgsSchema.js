import { z } from 'zod';
import { ServingCreateManyInputSchema } from '../inputTypeSchemas/ServingCreateManyInputSchema.js';
export const ServingCreateManyAndReturnArgsSchema = z.object({
    data: z.union([ServingCreateManyInputSchema, ServingCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default ServingCreateManyAndReturnArgsSchema;
