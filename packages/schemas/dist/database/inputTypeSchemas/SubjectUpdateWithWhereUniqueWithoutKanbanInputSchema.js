import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutKanbanInputSchema } from './SubjectUpdateWithoutKanbanInputSchema.js';
import { SubjectUncheckedUpdateWithoutKanbanInputSchema } from './SubjectUncheckedUpdateWithoutKanbanInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutKanbanInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    data: z.union([z.lazy(() => SubjectUpdateWithoutKanbanInputSchema), z.lazy(() => SubjectUncheckedUpdateWithoutKanbanInputSchema)]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutKanbanInputSchema;
