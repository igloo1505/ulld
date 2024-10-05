import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema';
import { KanBanListCreateWithoutKanbanInputSchema } from './KanBanListCreateWithoutKanbanInputSchema';
import { KanBanListUncheckedCreateWithoutKanbanInputSchema } from './KanBanListUncheckedCreateWithoutKanbanInputSchema';

export const KanBanListCreateOrConnectWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListCreateOrConnectWithoutKanbanInput> = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanBanListCreateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();

export default KanBanListCreateOrConnectWithoutKanbanInputSchema;
