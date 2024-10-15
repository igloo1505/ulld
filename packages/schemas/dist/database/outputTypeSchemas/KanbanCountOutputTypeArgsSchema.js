import { z } from 'zod';
import { KanbanCountOutputTypeSelectSchema } from './KanbanCountOutputTypeSelectSchema.js';
export const KanbanCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => KanbanCountOutputTypeSelectSchema).nullish(),
}).strict();
export default KanbanCountOutputTypeSelectSchema;
