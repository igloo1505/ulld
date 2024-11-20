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
})

export type Quote = z.infer<typeof QuoteSchema>

/////////////////////////////////////////
// QUOTE PARTIAL SCHEMA
/////////////////////////////////////////

export const QuotePartialSchema = QuoteSchema.partial()

export type QuotePartial = z.infer<typeof QuotePartialSchema>

export default QuoteSchema;
