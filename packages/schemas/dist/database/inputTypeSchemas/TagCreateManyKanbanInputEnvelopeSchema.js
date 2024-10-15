import { z } from 'zod';
import { TagCreateManyKanbanInputSchema } from './TagCreateManyKanbanInputSchema.js';
export const TagCreateManyKanbanInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => TagCreateManyKanbanInputSchema), z.lazy(() => TagCreateManyKanbanInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default TagCreateManyKanbanInputEnvelopeSchema;
