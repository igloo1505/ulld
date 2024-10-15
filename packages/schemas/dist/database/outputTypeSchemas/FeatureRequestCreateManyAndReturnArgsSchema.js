import { z } from 'zod';
import { FeatureRequestCreateManyInputSchema } from '../inputTypeSchemas/FeatureRequestCreateManyInputSchema.js';
export const FeatureRequestCreateManyAndReturnArgsSchema = z.object({
    data: z.union([FeatureRequestCreateManyInputSchema, FeatureRequestCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default FeatureRequestCreateManyAndReturnArgsSchema;
