import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const FeatureRequestMinOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    receivedOn: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default FeatureRequestMinOrderByAggregateInputSchema;
