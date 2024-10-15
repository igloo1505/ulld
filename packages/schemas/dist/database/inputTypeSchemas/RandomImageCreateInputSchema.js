import { z } from 'zod';
export const RandomImageCreateInputSchema = z.object({
    path: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export default RandomImageCreateInputSchema;
