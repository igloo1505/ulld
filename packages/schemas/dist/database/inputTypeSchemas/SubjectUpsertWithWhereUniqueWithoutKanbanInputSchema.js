import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutKanbanInputSchema } from './SubjectUpdateWithoutKanbanInputSchema.js';
import { SubjectUncheckedUpdateWithoutKanbanInputSchema } from './SubjectUncheckedUpdateWithoutKanbanInputSchema.js';
import { SubjectCreateWithoutKanbanInputSchema } from './SubjectCreateWithoutKanbanInputSchema.js';
import { SubjectUncheckedCreateWithoutKanbanInputSchema } from './SubjectUncheckedCreateWithoutKanbanInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutKanbanInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    update: z.union([z.lazy(() => SubjectUpdateWithoutKanbanInputSchema), z.lazy(() => SubjectUncheckedUpdateWithoutKanbanInputSchema)]),
    create: z.union([z.lazy(() => SubjectCreateWithoutKanbanInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema)]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutKanbanInputSchema;
