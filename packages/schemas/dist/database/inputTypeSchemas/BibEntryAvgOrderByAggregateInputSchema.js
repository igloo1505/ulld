import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibEntryAvgOrderByAggregateInputSchema = z.object({
    BibId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BibEntryAvgOrderByAggregateInputSchema;
