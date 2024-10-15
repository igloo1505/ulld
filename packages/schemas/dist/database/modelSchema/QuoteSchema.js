import { z } from 'zod';
/////////////////////////////////////////
// QUOTE SCHEMA
/////////////////////////////////////////
export const QuoteSchema = z.object({
    body: z.string(),
    author: z.string(),
    source: z.string().nullable(),
    pinned: z.boolean(),
    createdAt: z.coerce.date(),
});
/////////////////////////////////////////
// QUOTE PARTIAL SCHEMA
/////////////////////////////////////////
export const QuotePartialSchema = QuoteSchema.partial();
export default QuoteSchema;
