import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const ToDoListAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ToDoListAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default ToDoListAvgOrderByAggregateInputSchema;