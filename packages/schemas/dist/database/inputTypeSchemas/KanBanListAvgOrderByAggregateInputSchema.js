import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const KanBanListAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
    boardId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default KanBanListAvgOrderByAggregateInputSchema;
