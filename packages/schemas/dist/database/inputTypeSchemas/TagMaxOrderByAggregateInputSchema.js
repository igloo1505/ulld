import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TagMaxOrderByAggregateInputSchema = z.object({
    value: z.lazy(() => SortOrderSchema).optional(),
    kanbanId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TagMaxOrderByAggregateInputSchema;
