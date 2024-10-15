import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TopicOrderByRelationAggregateInputSchema = z.object({
    _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TopicOrderByRelationAggregateInputSchema;
