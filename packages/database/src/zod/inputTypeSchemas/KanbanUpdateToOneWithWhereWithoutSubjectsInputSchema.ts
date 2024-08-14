import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { KanbanUpdateWithoutSubjectsInputSchema } from './KanbanUpdateWithoutSubjectsInputSchema';
import { KanbanUncheckedUpdateWithoutSubjectsInputSchema } from './KanbanUncheckedUpdateWithoutSubjectsInputSchema';

export const KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.KanbanUpdateToOneWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => KanbanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KanbanUpdateWithoutSubjectsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default KanbanUpdateToOneWithWhereWithoutSubjectsInputSchema;
