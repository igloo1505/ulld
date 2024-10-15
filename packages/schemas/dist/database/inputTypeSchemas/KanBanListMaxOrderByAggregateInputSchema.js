import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const KanBanListMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    boardId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default KanBanListMaxOrderByAggregateInputSchema;
