import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const ToDoListCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    label: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    lastUpdate: z.lazy(() => SortOrderSchema).optional(),
    lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ToDoListCountOrderByAggregateInputSchema;
