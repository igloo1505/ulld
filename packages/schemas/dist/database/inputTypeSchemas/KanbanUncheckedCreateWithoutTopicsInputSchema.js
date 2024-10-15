import { z } from 'zod';
import { KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema } from './KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
import { TagUncheckedCreateNestedManyWithoutKanbanInputSchema } from './TagUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema } from './SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
export const KanbanUncheckedCreateWithoutTopicsInputSchema = z.object({
    id: z.number().int().optional(),
    title: z.string(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    lists: z.lazy(() => KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
    tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
    subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
export default KanbanUncheckedCreateWithoutTopicsInputSchema;
