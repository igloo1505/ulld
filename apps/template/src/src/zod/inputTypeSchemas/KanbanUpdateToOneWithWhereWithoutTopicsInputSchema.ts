import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { KanbanUpdateWithoutTopicsInputSchema } from './KanbanUpdateWithoutTopicsInputSchema';
import { KanbanUncheckedUpdateWithoutTopicsInputSchema } from './KanbanUncheckedUpdateWithoutTopicsInputSchema';

export const KanbanUpdateToOneWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanUpdateToOneWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => KanbanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KanbanUpdateWithoutTopicsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default KanbanUpdateToOneWithWhereWithoutTopicsInputSchema;
