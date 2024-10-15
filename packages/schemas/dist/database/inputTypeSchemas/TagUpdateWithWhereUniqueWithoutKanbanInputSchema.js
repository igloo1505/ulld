import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutKanbanInputSchema } from './TagUpdateWithoutKanbanInputSchema.js';
import { TagUncheckedUpdateWithoutKanbanInputSchema } from './TagUncheckedUpdateWithoutKanbanInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutKanbanInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TagUpdateWithoutKanbanInputSchema), z.lazy(() => TagUncheckedUpdateWithoutKanbanInputSchema)]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutKanbanInputSchema;
