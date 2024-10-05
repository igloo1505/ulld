import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { KanbanCountOrderByAggregateInputSchema } from './KanbanCountOrderByAggregateInputSchema';
import { KanbanAvgOrderByAggregateInputSchema } from './KanbanAvgOrderByAggregateInputSchema';
import { KanbanMaxOrderByAggregateInputSchema } from './KanbanMaxOrderByAggregateInputSchema';
import { KanbanMinOrderByAggregateInputSchema } from './KanbanMinOrderByAggregateInputSchema';
import { KanbanSumOrderByAggregateInputSchema } from './KanbanSumOrderByAggregateInputSchema';

export const KanbanOrderByWithAggregationInputSchema: z.ZodType<Prisma.KanbanOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => KanbanCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => KanbanAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KanbanMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KanbanMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => KanbanSumOrderByAggregateInputSchema).optional()
}).strict();

export default KanbanOrderByWithAggregationInputSchema;
