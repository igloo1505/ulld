import { z } from 'zod';
import { KanbanCreateNestedOneWithoutListsInputSchema } from './KanbanCreateNestedOneWithoutListsInputSchema.js';
export const KanBanListCreateWithoutCardsInputSchema = z.object({
    indexWithinBoard: z.number().int(),
    title: z.string().optional().nullable(),
    Kanban: z.lazy(() => KanbanCreateNestedOneWithoutListsInputSchema).optional()
}).strict();
export default KanBanListCreateWithoutCardsInputSchema;
