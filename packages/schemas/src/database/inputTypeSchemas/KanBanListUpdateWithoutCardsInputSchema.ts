import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { KanbanUpdateOneWithoutListsNestedInputSchema } from './KanbanUpdateOneWithoutListsNestedInputSchema';

export const KanBanListUpdateWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListUpdateWithoutCardsInput> = z.object({
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();

export default KanBanListUpdateWithoutCardsInputSchema;
