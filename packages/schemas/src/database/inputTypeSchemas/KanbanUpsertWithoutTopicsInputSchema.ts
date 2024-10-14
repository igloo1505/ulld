import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanUpdateWithoutTopicsInputSchema } from './KanbanUpdateWithoutTopicsInputSchema';
import { KanbanUncheckedUpdateWithoutTopicsInputSchema } from './KanbanUncheckedUpdateWithoutTopicsInputSchema';
import { KanbanCreateWithoutTopicsInputSchema } from './KanbanCreateWithoutTopicsInputSchema';
import { KanbanUncheckedCreateWithoutTopicsInputSchema } from './KanbanUncheckedCreateWithoutTopicsInputSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';

export const KanbanUpsertWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanUpsertWithoutTopicsInput> = z.object({
  update: z.union([ z.lazy(() => KanbanUpdateWithoutTopicsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => KanbanCreateWithoutTopicsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutTopicsInputSchema) ]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();

export default KanbanUpsertWithoutTopicsInputSchema;
