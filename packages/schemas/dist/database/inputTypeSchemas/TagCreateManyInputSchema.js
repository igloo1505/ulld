import { z } from 'zod';
export const TagCreateManyInputSchema = z.object({
    value: z.string(),
    kanbanId: z.number().int().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional()
}).strict();
export default TagCreateManyInputSchema;
