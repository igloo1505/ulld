import { z } from 'zod';
import { SubjectCreateManyKanbanInputSchema } from './SubjectCreateManyKanbanInputSchema.js';
export const SubjectCreateManyKanbanInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => SubjectCreateManyKanbanInputSchema), z.lazy(() => SubjectCreateManyKanbanInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default SubjectCreateManyKanbanInputEnvelopeSchema;
