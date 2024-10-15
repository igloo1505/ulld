import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const ToDoListSumOrderByAggregateInputSchema: z.ZodType<Prisma.ToDoListSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ToDoListSumOrderByAggregateInputSchema;