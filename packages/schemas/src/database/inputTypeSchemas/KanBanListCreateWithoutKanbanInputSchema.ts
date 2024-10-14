import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanBanCardCreateNestedManyWithoutKanBanListInputSchema } from './KanBanCardCreateNestedManyWithoutKanBanListInputSchema';

export const KanBanListCreateWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListCreateWithoutKanbanInput> = z.object({
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  cards: z.lazy(() => KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();

export default KanBanListCreateWithoutKanbanInputSchema;
