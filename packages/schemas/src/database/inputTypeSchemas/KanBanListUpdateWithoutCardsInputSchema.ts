import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { KanbanUpdateOneWithoutListsNestedInputSchema } from './KanbanUpdateOneWithoutListsNestedInputSchema.js';
export const KanBanListUpdateWithoutCardsInputSchema: z.ZodType<Prisma.KanBanListUpdateWithoutCardsInput> = z.object({
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();
export default KanBanListUpdateWithoutCardsInputSchema;