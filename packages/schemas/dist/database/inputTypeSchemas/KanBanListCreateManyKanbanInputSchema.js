import { z } from 'zod';
export const KanBanListCreateManyKanbanInputSchema = z.object({
    id: z.number().int().optional(),
    indexWithinBoard: z.number().int(),
    title: z.string().optional().nullable()
}).strict();
export default KanBanListCreateManyKanbanInputSchema;
