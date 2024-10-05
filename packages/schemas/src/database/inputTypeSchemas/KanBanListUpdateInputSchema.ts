import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { KanBanCardUpdateManyWithoutKanBanListNestedInputSchema } from './KanBanCardUpdateManyWithoutKanBanListNestedInputSchema';
import { KanbanUpdateOneWithoutListsNestedInputSchema } from './KanbanUpdateOneWithoutListsNestedInputSchema';

export const KanBanListUpdateInputSchema: z.ZodType<Prisma.KanBanListUpdateInput> = z.object({
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();

export default KanBanListUpdateInputSchema;
