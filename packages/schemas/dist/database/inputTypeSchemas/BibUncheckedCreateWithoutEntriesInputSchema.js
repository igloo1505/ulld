import { z } from 'zod';
export const BibUncheckedCreateWithoutEntriesInputSchema = z.object({
    id: z.number().int().optional(),
    filename: z.string(),
    firstSync: z.coerce.date().optional(),
    lastSync: z.coerce.date().optional()
}).strict();
export default BibUncheckedCreateWithoutEntriesInputSchema;
