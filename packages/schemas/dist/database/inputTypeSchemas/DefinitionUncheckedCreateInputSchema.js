import { z } from 'zod';
export const DefinitionUncheckedCreateInputSchema = z.object({
    id: z.string(),
    label: z.string().optional().nullable(),
    content: z.string().optional().nullable(),
    alphabeticalLabel: z.string().optional().nullable(),
    mdxNoteId: z.number().int().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional()
}).strict();
export default DefinitionUncheckedCreateInputSchema;
