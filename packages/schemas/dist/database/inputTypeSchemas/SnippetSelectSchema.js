import { z } from 'zod';
export const SnippetSelectSchema = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    description: z.boolean().optional(),
    keywords: z.boolean().optional(),
    language: z.boolean().optional(),
    createdAt: z.boolean().optional(),
}).strict();
export default SnippetSelectSchema;
