import { z } from 'zod';
import { KanbanUpdateWithoutTopicsInputSchema } from './KanbanUpdateWithoutTopicsInputSchema.js';
import { KanbanUncheckedUpdateWithoutTopicsInputSchema } from './KanbanUncheckedUpdateWithoutTopicsInputSchema.js';
import { KanbanCreateWithoutTopicsInputSchema } from './KanbanCreateWithoutTopicsInputSchema.js';
import { KanbanUncheckedCreateWithoutTopicsInputSchema } from './KanbanUncheckedCreateWithoutTopicsInputSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
export const KanbanUpsertWithoutTopicsInputSchema = z.object({
    update: z.union([z.lazy(() => KanbanUpdateWithoutTopicsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutTopicsInputSchema)]),
    create: z.union([z.lazy(() => KanbanCreateWithoutTopicsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutTopicsInputSchema)]),
    where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();
export default KanbanUpsertWithoutTopicsInputSchema;
