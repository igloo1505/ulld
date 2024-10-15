import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const KanbanMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    lastUpdate: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default KanbanMaxOrderByAggregateInputSchema;
