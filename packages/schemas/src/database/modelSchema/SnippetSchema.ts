import { z } from 'zod';

/////////////////////////////////////////
// SNIPPET SCHEMA
/////////////////////////////////////////

export const SnippetSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  description: z.string(),
  keywords: z.string().array(),
  language: z.string(),
  createdAt: z.coerce.date(),
})

export type Snippet = z.infer<typeof SnippetSchema>

/////////////////////////////////////////
// SNIPPET PARTIAL SCHEMA
/////////////////////////////////////////

export const SnippetPartialSchema = SnippetSchema.partial()

export type SnippetPartial = z.infer<typeof SnippetPartialSchema>

export default SnippetSchema;
