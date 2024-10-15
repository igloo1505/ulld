import { z } from 'zod';
export const CitationsGroupUncheckedCreateWithoutEntriesInputSchema = z.object({
    name: z.string(),
    description: z.string().optional().nullable()
}).strict();
export default CitationsGroupUncheckedCreateWithoutEntriesInputSchema;
