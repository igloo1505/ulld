import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const KanBanCardAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    listId: z.lazy(() => SortOrderSchema).optional(),
    indexWithinList: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default KanBanCardAvgOrderByAggregateInputSchema;
