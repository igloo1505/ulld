import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanCardCreateNestedManyWithoutKanBanListInputSchema } from './KanBanCardCreateNestedManyWithoutKanBanListInputSchema.js';
export const KanBanListCreateWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListCreateWithoutKanbanInput> = z.object({
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  cards: z.lazy(() => KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
export default KanBanListCreateWithoutKanbanInputSchema;