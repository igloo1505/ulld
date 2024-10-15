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
});
/////////////////////////////////////////
// SNIPPET PARTIAL SCHEMA
/////////////////////////////////////////
export const SnippetPartialSchema = SnippetSchema.partial();
export default SnippetSchema;
