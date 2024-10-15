import { z } from 'zod';
export const ReadingListCountOutputTypeSelectSchema = z.object({
    bibEntries: z.boolean().optional(),
    mdxNotes: z.boolean().optional(),
    ipynbNotes: z.boolean().optional(),
}).strict();
export default ReadingListCountOutputTypeSelectSchema;
