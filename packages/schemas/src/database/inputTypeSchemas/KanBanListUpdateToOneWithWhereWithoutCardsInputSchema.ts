import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListWhereInputSchema } from '../KanBanListWhereInputSchema.js';
import { KanBanListUpdateWithoutCardsInputSchema } from '../KanBanListUpdateWithoutCardsInputSchema.js';
import { KanBanListUncheckedUpdateWithoutCardsInputSchema } from '../KanBanListUncheckedUpdateWithoutCardsInputSchema.js';
export const KanBanListUpdateToOneWithWhereWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListUpdateToOneWithWhereWithoutCardsInput> = z.object({
  where: z.lazy(() => KanBanListWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => KanBanListUpdateWithoutCardsInputSchema),z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema) ]),
}).strict();
export default KanBanListUpdateToOneWithWhereWithoutCardsInputSchema;