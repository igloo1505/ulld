import { z } from 'zod';
import { KanBanListCreateManyKanbanInputSchema } from './KanBanListCreateManyKanbanInputSchema.js';
export const KanBanListCreateManyKanbanInputEnvelopeSchema = z.object({
    data: z.union([z.lazy(() => KanBanListCreateManyKanbanInputSchema), z.lazy(() => KanBanListCreateManyKanbanInputSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export default KanBanListCreateManyKanbanInputEnvelopeSchema;
