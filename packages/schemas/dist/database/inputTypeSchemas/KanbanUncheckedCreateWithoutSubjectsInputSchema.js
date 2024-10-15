import { z } from 'zod';
import { KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema } from './KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
import { TagUncheckedCreateNestedManyWithoutKanbanInputSchema } from './TagUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
import { TopicUncheckedCreateNestedManyWithoutKanbanInputSchema } from './TopicUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
export const KanbanUncheckedCreateWithoutSubjectsInputSchema = z.object({
    id: z.number().int().optional(),
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    lists: z.lazy(() => KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
    tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
    topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
export default KanbanUncheckedCreateWithoutSubjectsInputSchema;
