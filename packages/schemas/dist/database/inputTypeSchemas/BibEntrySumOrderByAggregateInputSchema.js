import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibEntrySumOrderByAggregateInputSchema = z.object({
    BibId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BibEntrySumOrderByAggregateInputSchema;
