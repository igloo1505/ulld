import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const KanBanCardCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    listId: z.lazy(() => SortOrderSchema).optional(),
    indexWithinList: z.lazy(() => SortOrderSchema).optional(),
    label: z.lazy(() => SortOrderSchema).optional(),
    details: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default KanBanCardCountOrderByAggregateInputSchema;
