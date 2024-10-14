import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema';

export const KanBanListUncheckedCreateWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUncheckedCreateWithoutKanbanInput> = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  cards: z.lazy(() => KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();

export default KanBanListUncheckedCreateWithoutKanbanInputSchema;
