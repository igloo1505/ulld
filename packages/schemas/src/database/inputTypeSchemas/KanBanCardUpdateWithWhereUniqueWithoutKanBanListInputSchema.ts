import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardWhereUniqueInputSchema } from './KanBanCardWhereUniqueInputSchema';
import { KanBanCardUpdateWithoutKanBanListInputSchema } from './KanBanCardUpdateWithoutKanBanListInputSchema';
import { KanBanCardUncheckedUpdateWithoutKanBanListInputSchema } from './KanBanCardUncheckedUpdateWithoutKanBanListInputSchema';

export const KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInput> = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => KanBanCardUpdateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedUpdateWithoutKanBanListInputSchema) ]),
}).strict();

export default KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema;
