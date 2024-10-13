import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { KanbanCountOrderByAggregateInputSchema } from '../KanbanCountOrderByAggregateInputSchema.js';
import { KanbanAvgOrderByAggregateInputSchema } from '../KanbanAvgOrderByAggregateInputSchema.js';
import { KanbanMaxOrderByAggregateInputSchema } from '../KanbanMaxOrderByAggregateInputSchema.js';
import { KanbanMinOrderByAggregateInputSchema } from '../KanbanMinOrderByAggregateInputSchema.js';
import { KanbanSumOrderByAggregateInputSchema } from '../KanbanSumOrderByAggregateInputSchema.js';
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