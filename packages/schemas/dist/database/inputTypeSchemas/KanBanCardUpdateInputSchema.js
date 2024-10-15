import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { KanBanListUpdateOneWithoutCardsNestedInputSchema } from './KanBanListUpdateOneWithoutCardsNestedInputSchema.js';
export const KanBanCardUpdateInputSchema = z.object({
    indexWithinList: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
    label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    KanBanList: z.lazy(() => KanBanListUpdateOneWithoutCardsNestedInputSchema).optional()
}).strict();
export default KanBanCardUpdateInputSchema;
