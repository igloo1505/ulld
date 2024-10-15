import { z } from 'zod';
import { BibEntryCreateNestedManyWithoutBibInputSchema } from './BibEntryCreateNestedManyWithoutBibInputSchema.js';
export const BibCreateInputSchema = z.object({
    id: z.number().int().optional(),
    filename: z.string(),
    firstSync: z.coerce.date().optional(),
    lastSync: z.coerce.date().optional(),
    entries: z.lazy(() => BibEntryCreateNestedManyWithoutBibInputSchema).optional()
}).strict();
export default BibCreateInputSchema;
