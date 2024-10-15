import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutKanbanInputSchema } from './TagUpdateWithoutKanbanInputSchema.js';
import { TagUncheckedUpdateWithoutKanbanInputSchema } from './TagUncheckedUpdateWithoutKanbanInputSchema.js';
import { TagCreateWithoutKanbanInputSchema } from './TagCreateWithoutKanbanInputSchema.js';
import { TagUncheckedCreateWithoutKanbanInputSchema } from './TagUncheckedCreateWithoutKanbanInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutKanbanInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    update: z.union([z.lazy(() => TagUpdateWithoutKanbanInputSchema), z.lazy(() => TagUncheckedUpdateWithoutKanbanInputSchema)]),
    create: z.union([z.lazy(() => TagCreateWithoutKanbanInputSchema), z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema)]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutKanbanInputSchema;
