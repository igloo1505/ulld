import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DietaryItemOrderByRelationAggregateInputSchema = z.object({
    _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DietaryItemOrderByRelationAggregateInputSchema;
