import { z } from 'zod';
import { TagCreateNestedManyWithoutKanbanInputSchema } from './TagCreateNestedManyWithoutKanbanInputSchema.js';
import { SubjectCreateNestedManyWithoutKanbanInputSchema } from './SubjectCreateNestedManyWithoutKanbanInputSchema.js';
import { TopicCreateNestedManyWithoutKanbanInputSchema } from './TopicCreateNestedManyWithoutKanbanInputSchema.js';
export const KanbanCreateWithoutListsInputSchema = z.object({
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    tags: z.lazy(() => TagCreateNestedManyWithoutKanbanInputSchema).optional(),
    subjects: z.lazy(() => SubjectCreateNestedManyWithoutKanbanInputSchema).optional(),
    topics: z.lazy(() => TopicCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
export default KanbanCreateWithoutListsInputSchema;
