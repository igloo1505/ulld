import { z } from 'zod';
export const QuoteSelectSchema = z.object({
    body: z.boolean().optional(),
    author: z.boolean().optional(),
    source: z.boolean().optional(),
    pinned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export default QuoteSelectSchema;
