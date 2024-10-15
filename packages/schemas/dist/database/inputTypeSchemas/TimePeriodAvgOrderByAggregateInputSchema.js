import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TimePeriodAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TimePeriodAvgOrderByAggregateInputSchema;
