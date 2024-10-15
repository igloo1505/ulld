import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { KanbanUpdateWithoutSubjectsInputSchema } from './KanbanUpdateWithoutSubjectsInputSchema.js';
import { KanbanUncheckedUpdateWithoutSubjectsInputSchema } from './KanbanUncheckedUpdateWithoutSubjectsInputSchema.js';
export const KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => KanbanWhereInputSchema).optional(),
    data: z.union([z.lazy(() => KanbanUpdateWithoutSubjectsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutSubjectsInputSchema)]),
}).strict();
export default KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema;
