import { z } from 'zod';
import { TopicCreateManyKanbanInputSchema } from './TopicCreateManyKanbanInputSchema.js';
export const TopicCreateManyKanbanInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => TopicCreateManyKanbanInputSchema), z.lazy(() => TopicCreateManyKanbanInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default TopicCreateManyKanbanInputEnvelopeSchema;
