import { z } from 'zod';
import { BibEntryCreateManyBibInputSchema } from './BibEntryCreateManyBibInputSchema.js';
export const BibEntryCreateManyBibInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => BibEntryCreateManyBibInputSchema), z.lazy(() => BibEntryCreateManyBibInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default BibEntryCreateManyBibInputEnvelopeSchema;
