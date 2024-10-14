import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema';
import { KanBanListCreateWithoutCardsInputSchema } from './KanBanListCreateWithoutCardsInputSchema';
import { KanBanListUncheckedCreateWithoutCardsInputSchema } from './KanBanListUncheckedCreateWithoutCardsInputSchema';

export const KanBanListCreateOrConnectWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListCreateOrConnectWithoutCardsInput> = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanBanListCreateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema) ]),
}).strict();

export default KanBanListCreateOrConnectWithoutCardsInputSchema;
