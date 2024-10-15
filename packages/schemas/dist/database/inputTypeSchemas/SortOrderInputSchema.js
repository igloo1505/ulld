import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { NullsOrderSchema } from './NullsOrderSchema.js';
export const SortOrderInputSchema = z.object({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();
export default SortOrderInputSchema;
