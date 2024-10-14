import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanUpdateWithoutSubjectsInputSchema } from './KanbanUpdateWithoutSubjectsInputSchema.js';
import { KanbanUncheckedUpdateWithoutSubjectsInputSchema } from './KanbanUncheckedUpdateWithoutSubjectsInputSchema.js';
import { KanbanCreateWithoutSubjectsInputSchema } from './KanbanCreateWithoutSubjectsInputSchema.js';
import { KanbanUncheckedCreateWithoutSubjectsInputSchema } from './KanbanUncheckedCreateWithoutSubjectsInputSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
export const KanbanUpsertWithoutSubjectsInputSchema: z.ZodType<Prisma.KanbanUpsertWithoutSubjectsInput> = z.object({
  update: z.union([ z.lazy(() => KanbanUpdateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => KanbanCreateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutSubjectsInputSchema) ]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();
export default KanbanUpsertWithoutSubjectsInputSchema;