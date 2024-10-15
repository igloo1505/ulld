import { z } from 'zod';
export const CitationsGroupCreateWithoutEntriesInputSchema = z.object({
    name: z.string(),
    description: z.string().optional().nullable()
}).strict();
export default CitationsGroupCreateWithoutEntriesInputSchema;
