import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardWhereUniqueInputSchema } from '../KanBanCardWhereUniqueInputSchema.js';
import { KanBanCardUpdateWithoutKanBanListInputSchema } from '../KanBanCardUpdateWithoutKanBanListInputSchema.js';
import { KanBanCardUncheckedUpdateWithoutKanBanListInputSchema } from '../KanBanCardUncheckedUpdateWithoutKanBanListInputSchema.js';
export const KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardUpdateWithWhereUniqueWithoutKanBanListInput> = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => KanBanCardUpdateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedUpdateWithoutKanBanListInputSchema) ]),
}).strict();
export default KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema;