import { z } from 'zod';
import { DJTCreateManyInputSchema } from '../inputTypeSchemas/DJTCreateManyInputSchema.js';
export const DJTCreateManyArgsSchema = z.object({
    data: z.union([DJTCreateManyInputSchema, DJTCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default DJTCreateManyArgsSchema;
