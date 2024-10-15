import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TopicAvgOrderByAggregateInputSchema = z.object({
    kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TopicAvgOrderByAggregateInputSchema;
