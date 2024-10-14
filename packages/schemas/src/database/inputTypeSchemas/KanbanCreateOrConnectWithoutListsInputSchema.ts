import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanbanWhereUniqueInputSchema } from './KanbanWhereUniqueInputSchema.js';
import { KanbanCreateWithoutListsInputSchema } from './KanbanCreateWithoutListsInputSchema.js';
import { KanbanUncheckedCreateWithoutListsInputSchema } from './KanbanUncheckedCreateWithoutListsInputSchema.js';
export const KanbanCreateOrConnectWithoutListsInputSchema: z.ZodType<Prisma.KanbanCreateOrConnectWithoutListsInput> = z.object({
  where: z.lazy(() => KanbanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanbanCreateWithoutListsInputSchema),z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema) ]),
}).strict();
export default KanbanCreateOrConnectWithoutListsInputSchema;