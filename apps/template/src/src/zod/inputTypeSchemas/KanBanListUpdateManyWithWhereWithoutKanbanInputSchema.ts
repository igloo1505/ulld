import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListScalarWhereInputSchema } from './KanBanListScalarWhereInputSchema';
import { KanBanListUpdateManyMutationInputSchema } from './KanBanListUpdateManyMutationInputSchema';
import { KanBanListUncheckedUpdateManyWithoutKanbanInputSchema } from './KanBanListUncheckedUpdateManyWithoutKanbanInputSchema';

export const KanBanListUpdateManyWithWhereWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUpdateManyWithWhereWithoutKanbanInput> = z.object({
  where: z.lazy(() => KanBanListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => KanBanListUpdateManyMutationInputSchema),z.lazy(() => KanBanListUncheckedUpdateManyWithoutKanbanInputSchema) ]),
}).strict();

export default KanBanListUpdateManyWithWhereWithoutKanbanInputSchema;
