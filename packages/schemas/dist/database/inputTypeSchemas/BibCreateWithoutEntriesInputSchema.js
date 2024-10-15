import { z } from 'zod';
export const BibCreateWithoutEntriesInputSchema = z.object({
    id: z.number().int().optional(),
    filename: z.string(),
    firstSync: z.coerce.date().optional(),
    lastSync: z.coerce.date().optional()
}).strict();
export default BibCreateWithoutEntriesInputSchema;
