import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListUpdateWithoutCardsInputSchema } from './KanBanListUpdateWithoutCardsInputSchema';
import { KanBanListUncheckedUpdateWithoutCardsInputSchema } from './KanBanListUncheckedUpdateWithoutCardsInputSchema';
import { KanBanListCreateWithoutCardsInputSchema } from './KanBanListCreateWithoutCardsInputSchema';
import { KanBanListUncheckedCreateWithoutCardsInputSchema } from './KanBanListUncheckedCreateWithoutCardsInputSchema';
import { KanBanListWhereInputSchema } from './KanBanListWhereInputSchema';

export const KanBanListUpsertWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListUpsertWithoutCardsInput> = z.object({
  update: z.union([ z.lazy(() => KanBanListUpdateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema) ]),
  create: z.union([ z.lazy(() => KanBanListCreateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema) ]),
  where: z.lazy(() => KanBanListWhereInputSchema).optional()
}).strict();

export default KanBanListUpsertWithoutCardsInputSchema;
