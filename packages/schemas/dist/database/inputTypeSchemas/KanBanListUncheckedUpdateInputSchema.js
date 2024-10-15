import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema.js';
import { KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema } from './KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema.js';
export const KanBanListUncheckedUpdateInputSchema = z.object({
    id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    boardId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
    cards: z.lazy(() => KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
export default KanBanListUncheckedUpdateInputSchema;
