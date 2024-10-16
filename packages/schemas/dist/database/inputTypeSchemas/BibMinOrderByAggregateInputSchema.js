import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BibMinOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    firstSync: z.lazy(() => SortOrderSchema).optional(),
    lastSync: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BibMinOrderByAggregateInputSchema;
