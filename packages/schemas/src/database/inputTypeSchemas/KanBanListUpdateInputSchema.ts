import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
import { KanBanCardUpdateManyWithoutKanBanListNestedInputSchema } from '../KanBanCardUpdateManyWithoutKanBanListNestedInputSchema.js';
import { KanbanUpdateOneWithoutListsNestedInputSchema } from '../KanbanUpdateOneWithoutListsNestedInputSchema.js';
export const KanBanListUpdateInputSchema: z.ZodType<Prisma.KanBanListUpdateInput> = z.object({
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();
export default KanBanListUpdateInputSchema;