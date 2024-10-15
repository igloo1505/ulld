import { z } from 'zod';
import { RelatedValuesCreateManyInputSchema } from '../inputTypeSchemas/RelatedValuesCreateManyInputSchema.js';
export const RelatedValuesCreateManyAndReturnArgsSchema = z.object({
    data: z.union([RelatedValuesCreateManyInputSchema, RelatedValuesCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default RelatedValuesCreateManyAndReturnArgsSchema;
