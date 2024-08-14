import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ToDoListOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ToDoListOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ToDoListOrderByRelationAggregateInputSchema;
