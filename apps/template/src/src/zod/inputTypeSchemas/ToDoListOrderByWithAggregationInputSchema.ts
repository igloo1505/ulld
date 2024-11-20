import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ToDoListCountOrderByAggregateInputSchema } from './ToDoListCountOrderByAggregateInputSchema';
import { ToDoListAvgOrderByAggregateInputSchema } from './ToDoListAvgOrderByAggregateInputSchema';
import { ToDoListMaxOrderByAggregateInputSchema } from './ToDoListMaxOrderByAggregateInputSchema';
import { ToDoListMinOrderByAggregateInputSchema } from './ToDoListMinOrderByAggregateInputSchema';
import { ToDoListSumOrderByAggregateInputSchema } from './ToDoListSumOrderByAggregateInputSchema';

export const ToDoListOrderByWithAggregationInputSchema: z.ZodType<Prisma.ToDoListOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ToDoListCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ToDoListAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ToDoListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ToDoListMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ToDoListSumOrderByAggregateInputSchema).optional()
}).strict();

export default ToDoListOrderByWithAggregationInputSchema;
