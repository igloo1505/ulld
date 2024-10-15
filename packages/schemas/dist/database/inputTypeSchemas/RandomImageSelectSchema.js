import { z } from 'zod';
export const RandomImageSelectSchema = z.object({
    path: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export default RandomImageSelectSchema;
