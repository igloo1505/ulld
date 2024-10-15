import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema.js';
import { KanBanListUpdateWithoutKanbanInputSchema } from './KanBanListUpdateWithoutKanbanInputSchema.js';
import { KanBanListUncheckedUpdateWithoutKanbanInputSchema } from './KanBanListUncheckedUpdateWithoutKanbanInputSchema.js';
export const KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUpdateWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => KanBanListUpdateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedUpdateWithoutKanbanInputSchema) ]),
}).strict();
export default KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema;