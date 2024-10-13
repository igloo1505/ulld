import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanUpdateWithoutListsInputSchema } from '../KanbanUpdateWithoutListsInputSchema.js';
import { KanbanUncheckedUpdateWithoutListsInputSchema } from '../KanbanUncheckedUpdateWithoutListsInputSchema.js';
import { KanbanCreateWithoutListsInputSchema } from '../KanbanCreateWithoutListsInputSchema.js';
import { KanbanUncheckedCreateWithoutListsInputSchema } from '../KanbanUncheckedCreateWithoutListsInputSchema.js';
import { KanbanWhereInputSchema } from '../KanbanWhereInputSchema.js';
export const KanbanUpsertWithoutListsInputSchema: z.ZodType<Prisma.KanbanUpsertWithoutListsInput> = z.object({
  update: z.union([ z.lazy(() => KanbanUpdateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema) ]),
  create: z.union([ z.lazy(() => KanbanCreateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema) ]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();
export default KanbanUpsertWithoutListsInputSchema;