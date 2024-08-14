import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KanbanCreateNestedOneWithoutListsInputSchema } from './KanbanCreateNestedOneWithoutListsInputSchema';

export const KanBanListCreateWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListCreateWithoutCardsInput> = z.object({
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutListsInputSchema).optional()
}).strict();

export default KanBanListCreateWithoutCardsInputSchema;
