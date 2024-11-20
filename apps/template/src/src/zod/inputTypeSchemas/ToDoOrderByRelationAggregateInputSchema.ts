import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ToDoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ToDoOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ToDoOrderByRelationAggregateInputSchema;
