import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SnippetSumOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SnippetSumOrderByAggregateInputSchema;
