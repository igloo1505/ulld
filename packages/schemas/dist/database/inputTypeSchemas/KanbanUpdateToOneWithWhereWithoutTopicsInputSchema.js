import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { KanbanUpdateWithoutTopicsInputSchema } from './KanbanUpdateWithoutTopicsInputSchema.js';
import { KanbanUncheckedUpdateWithoutTopicsInputSchema } from './KanbanUncheckedUpdateWithoutTopicsInputSchema.js';
export const KanbanUpdateToOneWithWhereWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => KanbanWhereInputSchema).optional(),
    data: z.union([z.lazy(() => KanbanUpdateWithoutTopicsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutTopicsInputSchema)]),
}).strict();
export default KanbanUpdateToOneWithWhereWithoutTopicsInputSchema;
