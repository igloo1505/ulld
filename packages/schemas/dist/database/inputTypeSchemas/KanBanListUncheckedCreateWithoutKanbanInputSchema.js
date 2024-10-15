import { z } from 'zod';
import { KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema.js';
export const KanBanListUncheckedCreateWithoutKanbanInputSchema = z.object({
    id: z.number().int().optional(),
    indexWithinBoard: z.number().int(),
    title: z.string().optional().nullable(),
    cards: z.lazy(() => KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
export default KanBanListUncheckedCreateWithoutKanbanInputSchema;
