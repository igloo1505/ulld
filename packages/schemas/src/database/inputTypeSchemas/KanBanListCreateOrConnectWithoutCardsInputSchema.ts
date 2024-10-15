import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema.js';
import { KanBanListCreateWithoutCardsInputSchema } from './KanBanListCreateWithoutCardsInputSchema.js';
import { KanBanListUncheckedCreateWithoutCardsInputSchema } from './KanBanListUncheckedCreateWithoutCardsInputSchema.js';
export const KanBanListCreateOrConnectWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListCreateOrConnectWithoutCardsInput> = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanBanListCreateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema) ]),
}).strict();
export default KanBanListCreateOrConnectWithoutCardsInputSchema;