import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListScalarWhereInputSchema } from './KanBanListScalarWhereInputSchema.js';
import { KanBanListUpdateManyMutationInputSchema } from './KanBanListUpdateManyMutationInputSchema.js';
import { KanBanListUncheckedUpdateManyWithoutKanbanInputSchema } from './KanBanListUncheckedUpdateManyWithoutKanbanInputSchema.js';
export const KanBanListUpdateManyWithWhereWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUpdateManyWithWhereWithoutKanbanInput> = z.object({
  where: z.lazy(() => KanBanListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => KanBanListUpdateManyMutationInputSchema),z.lazy(() => KanBanListUncheckedUpdateManyWithoutKanbanInputSchema) ]),
}).strict();
export default KanBanListUpdateManyWithWhereWithoutKanbanInputSchema;