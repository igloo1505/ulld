import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const AutoSettingAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default AutoSettingAvgOrderByAggregateInputSchema;
