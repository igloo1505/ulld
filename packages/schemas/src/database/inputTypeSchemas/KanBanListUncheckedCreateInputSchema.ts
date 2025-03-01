import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema.js';
export const KanBanListUncheckedCreateInputSchema: z.ZodType<Prisma.KanBanListUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  boardId: z.number().int().optional().nullable(),
  cards: z.lazy(() => KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
export default KanBanListUncheckedCreateInputSchema;