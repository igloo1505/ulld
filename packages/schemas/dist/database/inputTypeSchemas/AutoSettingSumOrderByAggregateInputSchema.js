import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const AutoSettingSumOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default AutoSettingSumOrderByAggregateInputSchema;
