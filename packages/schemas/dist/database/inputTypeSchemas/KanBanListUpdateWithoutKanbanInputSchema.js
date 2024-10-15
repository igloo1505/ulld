import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { KanBanCardUpdateManyWithoutKanBanListNestedInputSchema } from './KanBanCardUpdateManyWithoutKanBanListNestedInputSchema.js';
export const KanBanListUpdateWithoutKanbanInputSchema = z.object({
    indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cards: z.lazy(() => KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
export default KanBanListUpdateWithoutKanbanInputSchema;
