import { z } from 'zod';
import { KanBanListCreateNestedManyWithoutKanbanInputSchema } from './KanBanListCreateNestedManyWithoutKanbanInputSchema.js';
import { TagCreateNestedManyWithoutKanbanInputSchema } from './TagCreateNestedManyWithoutKanbanInputSchema.js';
import { TopicCreateNestedManyWithoutKanbanInputSchema } from './TopicCreateNestedManyWithoutKanbanInputSchema.js';
export const KanbanCreateWithoutSubjectsInputSchema = z.object({
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    lists: z.lazy(() => KanBanListCreateNestedManyWithoutKanbanInputSchema).optional(),
    tags: z.lazy(() => TagCreateNestedManyWithoutKanbanInputSchema).optional(),
    topics: z.lazy(() => TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
export default KanbanCreateWithoutSubjectsInputSchema;
