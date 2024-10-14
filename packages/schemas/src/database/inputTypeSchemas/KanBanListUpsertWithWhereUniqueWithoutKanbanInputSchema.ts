import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema';
import { KanBanListUpdateWithoutKanbanInputSchema } from './KanBanListUpdateWithoutKanbanInputSchema';
import { KanBanListUncheckedUpdateWithoutKanbanInputSchema } from './KanBanListUncheckedUpdateWithoutKanbanInputSchema';
import { KanBanListCreateWithoutKanbanInputSchema } from './KanBanListCreateWithoutKanbanInputSchema';
import { KanBanListUncheckedCreateWithoutKanbanInputSchema } from './KanBanListUncheckedCreateWithoutKanbanInputSchema';

export const KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUpsertWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => KanBanListUpdateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedUpdateWithoutKanbanInputSchema) ]),
  create: z.union([ z.lazy(() => KanBanListCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();

export default KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema;
