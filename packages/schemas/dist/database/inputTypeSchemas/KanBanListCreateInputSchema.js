import { z } from 'zod';
import { KanBanCardCreateNestedManyWithoutKanBanListInputSchema } from './KanBanCardCreateNestedManyWithoutKanBanListInputSchema.js';
import { KanbanCreateNestedOneWithoutListsInputSchema } from './KanbanCreateNestedOneWithoutListsInputSchema.js';
export const KanBanListCreateInputSchema = z.object({
    indexWithinBoard: z.number().int(),
    title: z.string().optional().nullable(),
    cards: z.lazy(() => KanBanCardCreateNestedManyWithoutKanBanListInputSchema).optional(),
    Kanban: z.lazy(() => KanbanCreateNestedOneWithoutListsInputSchema).optional()
}).strict();
export default KanBanListCreateInputSchema;
