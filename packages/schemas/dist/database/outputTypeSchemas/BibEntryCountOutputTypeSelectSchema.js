import { z } from 'zod';
export const BibEntryCountOutputTypeSelectSchema = z.object({
    citationGroups: z.boolean().optional(),
    tags: z.boolean().optional(),
    topics: z.boolean().optional(),
    subjects: z.boolean().optional(),
    MdxNotes: z.boolean().optional(),
    ipynbNotes: z.boolean().optional(),
    readingList: z.boolean().optional(),
}).strict();
export default BibEntryCountOutputTypeSelectSchema;
