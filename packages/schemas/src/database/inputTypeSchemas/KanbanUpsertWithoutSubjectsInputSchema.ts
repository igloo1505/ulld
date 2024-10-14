import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanUpdateWithoutSubjectsInputSchema } from './KanbanUpdateWithoutSubjectsInputSchema';
import { KanbanUncheckedUpdateWithoutSubjectsInputSchema } from './KanbanUncheckedUpdateWithoutSubjectsInputSchema';
import { KanbanCreateWithoutSubjectsInputSchema } from './KanbanCreateWithoutSubjectsInputSchema';
import { KanbanUncheckedCreateWithoutSubjectsInputSchema } from './KanbanUncheckedCreateWithoutSubjectsInputSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';

export const KanbanUpsertWithoutSubjectsInputSchema: z.ZodType<Prisma.KanbanUpsertWithoutSubjectsInput> = z.object({
  update: z.union([ z.lazy(() => KanbanUpdateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => KanbanCreateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutSubjectsInputSchema) ]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();

export default KanbanUpsertWithoutSubjectsInputSchema;
