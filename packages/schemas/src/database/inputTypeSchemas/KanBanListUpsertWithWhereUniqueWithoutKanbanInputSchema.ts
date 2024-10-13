import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListWhereUniqueInputSchema } from '../KanBanListWhereUniqueInputSchema.js';
import { KanBanListUpdateWithoutKanbanInputSchema } from '../KanBanListUpdateWithoutKanbanInputSchema.js';
import { KanBanListUncheckedUpdateWithoutKanbanInputSchema } from '../KanBanListUncheckedUpdateWithoutKanbanInputSchema.js';
import { KanBanListCreateWithoutKanbanInputSchema } from '../KanBanListCreateWithoutKanbanInputSchema.js';
import { KanBanListUncheckedCreateWithoutKanbanInputSchema } from '../KanBanListUncheckedCreateWithoutKanbanInputSchema.js';
export const KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUpsertWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => KanBanListUpdateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedUpdateWithoutKanbanInputSchema) ]),
  create: z.union([ z.lazy(() => KanBanListCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();
export default KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema;