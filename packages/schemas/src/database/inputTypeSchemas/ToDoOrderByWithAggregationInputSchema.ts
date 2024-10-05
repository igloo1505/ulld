import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ToDoCountOrderByAggregateInputSchema } from './ToDoCountOrderByAggregateInputSchema';
import { ToDoAvgOrderByAggregateInputSchema } from './ToDoAvgOrderByAggregateInputSchema';
import { ToDoMaxOrderByAggregateInputSchema } from './ToDoMaxOrderByAggregateInputSchema';
import { ToDoMinOrderByAggregateInputSchema } from './ToDoMinOrderByAggregateInputSchema';
import { ToDoSumOrderByAggregateInputSchema } from './ToDoSumOrderByAggregateInputSchema';

export const ToDoOrderByWithAggregationInputSchema: z.ZodType<Prisma.ToDoOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  dueAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  details: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  toDoListId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completedOn: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ToDoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ToDoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ToDoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ToDoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ToDoSumOrderByAggregateInputSchema).optional()
}).strict();

export default ToDoOrderByWithAggregationInputSchema;
