import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardWhereUniqueInputSchema } from './KanBanCardWhereUniqueInputSchema';
import { KanBanCardCreateWithoutKanBanListInputSchema } from './KanBanCardCreateWithoutKanBanListInputSchema';
import { KanBanCardUncheckedCreateWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateWithoutKanBanListInputSchema';

export const KanBanCardCreateOrConnectWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardCreateOrConnectWithoutKanBanListInput> = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema) ]),
}).strict();

export default KanBanCardCreateOrConnectWithoutKanBanListInputSchema;
