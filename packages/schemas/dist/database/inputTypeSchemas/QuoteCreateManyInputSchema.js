import { z } from 'zod';
export const QuoteCreateManyInputSchema = z.object({
    body: z.string(),
    author: z.string(),
    source: z.string().optional().nullable(),
    pinned: z.boolean().optional(),
    createdAt: z.coerce.date().optional()
}).strict();
export default QuoteCreateManyInputSchema;
