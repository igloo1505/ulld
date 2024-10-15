import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DietaryItemAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    gi: z.lazy(() => SortOrderSchema).optional(),
    calsPerOz: z.lazy(() => SortOrderSchema).optional(),
    impactScore: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DietaryItemAvgOrderByAggregateInputSchema;
