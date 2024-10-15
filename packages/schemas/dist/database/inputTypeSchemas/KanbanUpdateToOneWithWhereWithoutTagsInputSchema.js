import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { KanbanUpdateWithoutTagsInputSchema } from './KanbanUpdateWithoutTagsInputSchema.js';
import { KanbanUncheckedUpdateWithoutTagsInputSchema } from './KanbanUncheckedUpdateWithoutTagsInputSchema.js';
export const KanbanUpdateToOneWithWhereWithoutTagsInputSchema = z.object({
    where: z.lazy(() => KanbanWhereInputSchema).optional(),
    data: z.union([z.lazy(() => KanbanUpdateWithoutTagsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutTagsInputSchema)]),
}).strict();
export default KanbanUpdateToOneWithWhereWithoutTagsInputSchema;
