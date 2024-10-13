import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
import { KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema } from '../KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema.js';
export const KanBanListUncheckedUpdateWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUncheckedUpdateWithoutKanbanInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
export default KanBanListUncheckedUpdateWithoutKanbanInputSchema;