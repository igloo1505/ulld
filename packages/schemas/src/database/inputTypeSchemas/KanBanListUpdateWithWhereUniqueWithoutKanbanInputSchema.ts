import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema';
import { KanBanListUpdateWithoutKanbanInputSchema } from './KanBanListUpdateWithoutKanbanInputSchema';
import { KanBanListUncheckedUpdateWithoutKanbanInputSchema } from './KanBanListUncheckedUpdateWithoutKanbanInputSchema';

export const KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUpdateWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => KanBanListUpdateWithoutKanbanInputSchema),z.lazy(() => KanBanListUncheckedUpdateWithoutKanbanInputSchema) ]),
}).strict();

export default KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema;
