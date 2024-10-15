import { z } from 'zod';
import { IpynbCreateManySequentialListInputSchema } from './IpynbCreateManySequentialListInputSchema.js';
export const IpynbCreateManySequentialListInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => IpynbCreateManySequentialListInputSchema), z.lazy(() => IpynbCreateManySequentialListInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default IpynbCreateManySequentialListInputEnvelopeSchema;
