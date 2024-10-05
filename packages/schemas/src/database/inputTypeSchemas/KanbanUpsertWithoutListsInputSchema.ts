import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanUpdateWithoutListsInputSchema } from './KanbanUpdateWithoutListsInputSchema';
import { KanbanUncheckedUpdateWithoutListsInputSchema } from './KanbanUncheckedUpdateWithoutListsInputSchema';
import { KanbanCreateWithoutListsInputSchema } from './KanbanCreateWithoutListsInputSchema';
import { KanbanUncheckedCreateWithoutListsInputSchema } from './KanbanUncheckedCreateWithoutListsInputSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';

export const KanbanUpsertWithoutListsInputSchema: z.ZodType<Prisma.KanbanUpsertWithoutListsInput> = z.object({
  update: z.union([ z.lazy(() => KanbanUpdateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema) ]),
  create: z.union([ z.lazy(() => KanbanCreateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema) ]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();

export default KanbanUpsertWithoutListsInputSchema;
