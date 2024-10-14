import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TopicCountOrderByAggregateInputSchema } from './TopicCountOrderByAggregateInputSchema';
import { TopicAvgOrderByAggregateInputSchema } from './TopicAvgOrderByAggregateInputSchema';
import { TopicMaxOrderByAggregateInputSchema } from './TopicMaxOrderByAggregateInputSchema';
import { TopicMinOrderByAggregateInputSchema } from './TopicMinOrderByAggregateInputSchema';
import { TopicSumOrderByAggregateInputSchema } from './TopicSumOrderByAggregateInputSchema';

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
