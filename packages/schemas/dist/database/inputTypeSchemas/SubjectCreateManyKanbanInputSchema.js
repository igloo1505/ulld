import { z } from 'zod';
export const SubjectCreateManyKanbanInputSchema = z.object({
    value: z.string(),
    createdAt: z.coerce.date().optional(),
    lastAccess: z.coerce.date().optional()
}).strict();
export default SubjectCreateManyKanbanInputSchema;
