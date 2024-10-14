import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { KanbanUpdateWithoutListsInputSchema } from './KanbanUpdateWithoutListsInputSchema';
import { KanbanUncheckedUpdateWithoutListsInputSchema } from './KanbanUncheckedUpdateWithoutListsInputSchema';

export const KanbanUpdateToOneWithWhereWithoutListsInputSchema: z.ZodType<Prisma.KanbanUpdateToOneWithWhereWithoutListsInput> = z.object({
  where: z.lazy(() => KanbanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KanbanUpdateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema) ]),
}).strict();

export default KanbanUpdateToOneWithWhereWithoutListsInputSchema;
