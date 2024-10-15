import { z } from 'zod';
import { RelatedValuesCreateManyInputSchema } from '../inputTypeSchemas/RelatedValuesCreateManyInputSchema.js';
export const RelatedValuesCreateManyArgsSchema = z.object({
    data: z.union([RelatedValuesCreateManyInputSchema, RelatedValuesCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default RelatedValuesCreateManyArgsSchema;
