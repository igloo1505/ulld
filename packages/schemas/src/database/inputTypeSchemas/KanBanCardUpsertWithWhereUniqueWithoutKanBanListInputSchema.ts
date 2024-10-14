import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardWhereUniqueInputSchema } from './KanBanCardWhereUniqueInputSchema';
import { KanBanCardUpdateWithoutKanBanListInputSchema } from './KanBanCardUpdateWithoutKanBanListInputSchema';
import { KanBanCardUncheckedUpdateWithoutKanBanListInputSchema } from './KanBanCardUncheckedUpdateWithoutKanBanListInputSchema';
import { KanBanCardCreateWithoutKanBanListInputSchema } from './KanBanCardCreateWithoutKanBanListInputSchema';
import { KanBanCardUncheckedCreateWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateWithoutKanBanListInputSchema';

export const KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInput> = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => KanBanCardUpdateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedUpdateWithoutKanBanListInputSchema) ]),
  create: z.union([ z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema) ]),
}).strict();

export default KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema;
