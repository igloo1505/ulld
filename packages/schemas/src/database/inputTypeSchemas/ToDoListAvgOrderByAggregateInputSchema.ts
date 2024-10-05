import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ToDoListAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ToDoListAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ToDoListAvgOrderByAggregateInputSchema;
