import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { TopicCountOrderByAggregateInputSchema } from './TopicCountOrderByAggregateInputSchema.js';
import { TopicAvgOrderByAggregateInputSchema } from './TopicAvgOrderByAggregateInputSchema.js';
import { TopicMaxOrderByAggregateInputSchema } from './TopicMaxOrderByAggregateInputSchema.js';
import { TopicMinOrderByAggregateInputSchema } from './TopicMinOrderByAggregateInputSchema.js';
import { TopicSumOrderByAggregateInputSchema } from './TopicSumOrderByAggregateInputSchema.js';
export const TopicOrderByWithAggregationInputSchema: z.ZodType<Prisma.TopicOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TopicCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TopicAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TopicMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TopicMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TopicSumOrderByAggregateInputSchema).optional()
}).strict();
export default TopicOrderByWithAggregationInputSchema;