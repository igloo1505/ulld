import { z } from 'zod';
export const RandomImageCreateManyInputSchema = z.object({
    path: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export default RandomImageCreateManyInputSchema;
