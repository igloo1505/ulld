import { z } from 'zod';
export const KanbanCountOutputTypeSelectSchema = z.object({
    lists: z.boolean().optional(),
    tags: z.boolean().optional(),
    subjects: z.boolean().optional(),
    topics: z.boolean().optional(),
}).strict();
export default KanbanCountOutputTypeSelectSchema;
