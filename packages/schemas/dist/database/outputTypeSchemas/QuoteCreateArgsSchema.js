import { z } from 'zod';
import { QuoteCreateInputSchema } from '../inputTypeSchemas/QuoteCreateInputSchema.js';
import { QuoteUncheckedCreateInputSchema } from '../inputTypeSchemas/QuoteUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const QuoteSelectSchema = z.object({
    body: z.boolean().optional(),
    author: z.boolean().optional(),
    source: z.boolean().optional(),
    pinned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const QuoteCreateArgsSchema = z.object({
    select: QuoteSelectSchema.optional(),
    data: z.union([QuoteCreateInputSchema, QuoteUncheckedCreateInputSchema]),
}).strict();
export default QuoteCreateArgsSchema;
