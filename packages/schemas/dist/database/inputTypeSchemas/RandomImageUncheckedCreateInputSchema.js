import { z } from 'zod';
export const RandomImageUncheckedCreateInputSchema = z.object({
    path: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export default RandomImageUncheckedCreateInputSchema;
