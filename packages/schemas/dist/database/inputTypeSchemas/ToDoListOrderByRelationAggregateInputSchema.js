import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const ToDoListOrderByRelationAggregateInputSchema = z.object({
    _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ToDoListOrderByRelationAggregateInputSchema;
