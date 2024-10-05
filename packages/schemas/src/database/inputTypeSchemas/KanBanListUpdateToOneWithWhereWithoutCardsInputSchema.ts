import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema';
import { KanBanListUpdateWithoutCardsInputSchema } from './KanBanListUpdateWithoutCardsInputSchema';
import { KanBanListUncheckedUpdateWithoutCardsInputSchema } from './KanBanListUncheckedUpdateWithoutCardsInputSchema';

export const KanBanListUpdateToOneWithWhereWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListUpdateToOneWithWhereWithoutCardsInput> = z.object({
  where: z.lazy(() => KanBanListWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KanBanListUpdateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema) ]),
}).strict();

export default KanBanListUpdateToOneWithWhereWithoutCardsInputSchema;
