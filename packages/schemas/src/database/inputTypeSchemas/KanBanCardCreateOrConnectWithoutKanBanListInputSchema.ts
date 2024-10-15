import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardWhereUniqueInputSchema } from './KanBanCardWhereUniqueInputSchema.js';
import { KanBanCardCreateWithoutKanBanListInputSchema } from './KanBanCardCreateWithoutKanBanListInputSchema.js';
import { KanBanCardUncheckedCreateWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateWithoutKanBanListInputSchema.js';
export const KanBanCardCreateOrConnectWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardCreateOrConnectWithoutKanBanListInput> = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema) ]),
}).strict();
export default KanBanCardCreateOrConnectWithoutKanBanListInputSchema;