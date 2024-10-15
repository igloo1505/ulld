import { z } from 'zod';
import { QuoteWhereUniqueInputSchema } from '../inputTypeSchemas/QuoteWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const QuoteSelectSchema = z.object({
    body: z.boolean().optional(),
    author: z.boolean().optional(),
    source: z.boolean().optional(),
    pinned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export const QuoteDeleteArgsSchema = z.object({
    select: QuoteSelectSchema.optional(),
    where: QuoteWhereUniqueInputSchema,
}).strict();
export default QuoteDeleteArgsSchema;
