import { z } from 'zod';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
import { KanbanCreateWithoutSubjectsInputSchema } from './KanbanCreateWithoutSubjectsInputSchema.js';
import { KanbanUncheckedCreateWithoutSubjectsInputSchema } from './KanbanUncheckedCreateWithoutSubjectsInputSchema.js';
export const KanbanCreateOrConnectWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => KanbanWhereUniqueInputSchema),
    create: z.union([z.lazy(() => KanbanCreateWithoutSubjectsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default KanbanCreateOrConnectWithoutSubjectsInputSchema;
