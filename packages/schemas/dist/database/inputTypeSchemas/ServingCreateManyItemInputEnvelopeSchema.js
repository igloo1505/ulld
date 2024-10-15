import { z } from 'zod';
import { ServingCreateManyItemInputSchema } from './ServingCreateManyItemInputSchema.js';
export const ServingCreateManyItemInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => ServingCreateManyItemInputSchema), z.lazy(() => ServingCreateManyItemInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default ServingCreateManyItemInputEnvelopeSchema;
