import { z } from 'zod';
export const IpynbCountOutputTypeSelectSchema = z.object({
    tags: z.boolean().optional(),
    topics: z.boolean().optional(),
    subjects: z.boolean().optional(),
    citations: z.boolean().optional(),
    readingList: z.boolean().optional(),
}).strict();
export default IpynbCountOutputTypeSelectSchema;
