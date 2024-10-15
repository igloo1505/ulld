import { z } from 'zod';
export const CitationsGroupCreateManyInputSchema = z.object({
    name: z.string(),
    description: z.string().optional().nullable()
}).strict();
export default CitationsGroupCreateManyInputSchema;
