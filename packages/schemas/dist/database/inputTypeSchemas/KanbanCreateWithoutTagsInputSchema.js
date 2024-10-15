import { z } from 'zod';
import { KanBanListCreateNestedManyWithoutKanbanInputSchema } from './KanBanListCreateNestedManyWithoutKanbanInputSchema.js';
import { SubjectCreateNestedManyWithoutKanbanInputSchema } from './SubjectCreateNestedManyWithoutKanbanInputSchema.js';
import { TopicCreateNestedManyWithoutKanbanInputSchema } from './TopicCreateNestedManyWithoutKanbanInputSchema.js';
export const KanbanCreateWithoutTagsInputSchema = z.object({
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    lists: z.lazy(() => KanBanListCreateNestedManyWithoutKanbanInputSchema).optional(),
    subjects: z.lazy(() => SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
    topics: z.lazy(() => TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
export default KanbanCreateWithoutTagsInputSchema;
