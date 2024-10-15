import { z } from 'zod';
export const SnippetCreatekeywordsInputSchema = z.object({
    set: z.string().array()
}).strict();
export default SnippetCreatekeywordsInputSchema;
