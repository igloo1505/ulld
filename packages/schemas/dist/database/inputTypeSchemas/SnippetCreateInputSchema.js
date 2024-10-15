import { z } from 'zod';
import { SnippetCreatekeywordsInputSchema } from './SnippetCreatekeywordsInputSchema.js';
export const SnippetCreateInputSchema = z.object({
    content: z.string(),
    description: z.string(),
    keywords: z.union([z.lazy(() => SnippetCreatekeywordsInputSchema), z.string().array()]).optional(),
    language: z.string(),
    createdAt: z.coerce.date().optional()
}).strict();
export default SnippetCreateInputSchema;
