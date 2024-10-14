import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListCreateWithoutCardsInputSchema } from './KanBanListCreateWithoutCardsInputSchema.js';
import { KanBanListUncheckedCreateWithoutCardsInputSchema } from './KanBanListUncheckedCreateWithoutCardsInputSchema.js';
import { KanBanListCreateOrConnectWithoutCardsInputSchema } from './KanBanListCreateOrConnectWithoutCardsInputSchema.js';
import { KanBanListWhereUniqueInputSchema } from './KanBanListWhereUniqueInputSchema.js';
export const KanBanListCreateNestedOneWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListCreateNestedOneWithoutCardsInput> = z.object({
  create: z.union([ z.lazy(() => KanBanListCreateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  connect: z.lazy(() => KanBanListWhereUniqueInputSchema).optional()
}).strict();
export default KanBanListCreateNestedOneWithoutCardsInputSchema;