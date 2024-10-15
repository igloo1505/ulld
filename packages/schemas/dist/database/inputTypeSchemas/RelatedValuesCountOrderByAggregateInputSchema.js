import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const RelatedValuesCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    input: z.lazy(() => SortOrderSchema).optional(),
    output: z.lazy(() => SortOrderSchema).optional(),
    equationId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default RelatedValuesCountOrderByAggregateInputSchema;
