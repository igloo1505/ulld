import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DailyFocusMaxOrderByAggregateInputSchema = z.object({
    value: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DailyFocusMaxOrderByAggregateInputSchema;
