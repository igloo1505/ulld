import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListWhereUniqueInputSchema } from '../KanBanListWhereUniqueInputSchema.js';
import { KanBanListCreateWithoutKanbanInputSchema } from '../KanBanListCreateWithoutKanbanInputSchema.js';
import { KanBanListUncheckedCreateWithoutKanbanInputSchema } from '../KanBanListUncheckedCreateWithoutKanbanInputSchema.js';
export const KanBanListCreateOrConnectWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListCreateOrConnectWithoutKanbanInput> = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanBanListCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();
export default KanBanListCreateOrConnectWithoutKanbanInputSchema;