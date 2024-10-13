import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardScalarWhereInputSchema } from '../KanBanCardScalarWhereInputSchema.js';
import { KanBanCardUpdateManyMutationInputSchema } from '../KanBanCardUpdateManyMutationInputSchema.js';
import { KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema } from '../KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema.js';
export const KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardUpdateManyWithWhereWithoutKanBanListInput> = z.object({
  where: z.lazy(() => KanBanCardScalarWhereInputSchema),
  data: z.union([ z.lazy(() => KanBanCardUpdateManyMutationInputSchema),z.lazy(() => KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema) ]),
}).strict();
export default KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema;