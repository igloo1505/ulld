import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { ToDoListCountOrderByAggregateInputSchema } from './ToDoListCountOrderByAggregateInputSchema.js';
import { ToDoListAvgOrderByAggregateInputSchema } from './ToDoListAvgOrderByAggregateInputSchema.js';
import { ToDoListMaxOrderByAggregateInputSchema } from './ToDoListMaxOrderByAggregateInputSchema.js';
import { ToDoListMinOrderByAggregateInputSchema } from './ToDoListMinOrderByAggregateInputSchema.js';
import { ToDoListSumOrderByAggregateInputSchema } from './ToDoListSumOrderByAggregateInputSchema.js';
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