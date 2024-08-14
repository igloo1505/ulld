import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { KanBanCardUpdateManyWithoutKanBanListNestedInputSchema } from './KanBanCardUpdateManyWithoutKanBanListNestedInputSchema';

export const KanBanListUpdateWithoutKanbanInputSchema: z.ZodType<Prisma.KanBanListUpdateWithoutKanbanInput> = z.object({
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();

export default KanBanListUpdateWithoutKanbanInputSchema;
