import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanListCreateWithoutCardsInputSchema } from './KanBanListCreateWithoutCardsInputSchema';
import { KanBanListUncheckedCreateWithoutCardsInputSchema } from './KanBanListUncheckedCreateWithoutCardsInputSchema';
import { KanBanListCreateOrConnectWithoutCardsInputSchema } from './KanBanListCreateOrConnectWithoutCardsInputSchema';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema';

export const KanBanListCreateNestedOneWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListCreateNestedOneWithoutCardsInput> = z.object({
  create: z.union([ z.lazy(() => KanBanListCreateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  connect: z.lazy(() => KanBanListWhereUniqueInputSchema).optional()
}).strict();

export default KanBanListCreateNestedOneWithoutCardsInputSchema;
