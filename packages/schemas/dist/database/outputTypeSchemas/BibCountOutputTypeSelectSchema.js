import { z } from 'zod';
export const BibCountOutputTypeSelectSchema = z.object({
    entries: z.boolean().optional(),
}).strict();
export default BibCountOutputTypeSelectSchema;
