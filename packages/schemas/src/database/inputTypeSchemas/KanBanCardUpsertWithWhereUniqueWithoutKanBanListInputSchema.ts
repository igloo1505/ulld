import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardWhereUniqueInputSchema } from '../KanBanCardWhereUniqueInputSchema.js';
import { KanBanCardUpdateWithoutKanBanListInputSchema } from '../KanBanCardUpdateWithoutKanBanListInputSchema.js';
import { KanBanCardUncheckedUpdateWithoutKanBanListInputSchema } from '../KanBanCardUncheckedUpdateWithoutKanBanListInputSchema.js';
import { KanBanCardCreateWithoutKanBanListInputSchema } from '../KanBanCardCreateWithoutKanBanListInputSchema.js';
import { KanBanCardUncheckedCreateWithoutKanBanListInputSchema } from '../KanBanCardUncheckedCreateWithoutKanBanListInputSchema.js';
export const KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardUpsertWithWhereUniqueWithoutKanBanListInput> = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => KanBanCardUpdateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedUpdateWithoutKanBanListInputSchema) ]),
  create: z.union([ z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema),z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema) ]),
}).strict();
export default KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema;