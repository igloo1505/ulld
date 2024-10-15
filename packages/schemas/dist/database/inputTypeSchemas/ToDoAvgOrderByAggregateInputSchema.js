import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const ToDoAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    parentId: z.lazy(() => SortOrderSchema).optional(),
    priority: z.lazy(() => SortOrderSchema).optional(),
    toDoListId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ToDoAvgOrderByAggregateInputSchema;
