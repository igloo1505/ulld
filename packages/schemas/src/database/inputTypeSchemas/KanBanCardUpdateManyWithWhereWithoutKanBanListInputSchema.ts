import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardScalarWhereInputSchema } from './KanBanCardScalarWhereInputSchema';
import { KanBanCardUpdateManyMutationInputSchema } from './KanBanCardUpdateManyMutationInputSchema';
import { KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema } from './KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema';

export const KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardUpdateManyWithWhereWithoutKanBanListInput> = z.object({
  where: z.lazy(() => KanBanCardScalarWhereInputSchema),
  data: z.union([ z.lazy(() => KanBanCardUpdateManyMutationInputSchema),z.lazy(() => KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema) ]),
}).strict();

export default KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema;
