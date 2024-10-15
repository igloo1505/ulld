import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { KanbanUpdateWithoutListsInputSchema } from './KanbanUpdateWithoutListsInputSchema.js';
import { KanbanUncheckedUpdateWithoutListsInputSchema } from './KanbanUncheckedUpdateWithoutListsInputSchema.js';
export const KanbanUpdateToOneWithWhereWithoutListsInputSchema: z.ZodType<Prisma.KanbanUpdateToOneWithWhereWithoutListsInput> = z.object({
  where: z.lazy(() => KanbanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KanbanUpdateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema) ]),
}).strict();
export default KanbanUpdateToOneWithWhereWithoutListsInputSchema;