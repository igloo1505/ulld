import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema } from './KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema';

export const KanBanListUncheckedUpdateWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUncheckedUpdateWithoutKanbanInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();

export default KanBanListUncheckedUpdateWithoutKanbanInputSchema;
