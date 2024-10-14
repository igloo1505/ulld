import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TagCountOrderByAggregateInputSchema } from './TagCountOrderByAggregateInputSchema';
import { TagAvgOrderByAggregateInputSchema } from './TagAvgOrderByAggregateInputSchema';
import { TagMaxOrderByAggregateInputSchema } from './TagMaxOrderByAggregateInputSchema';
import { TagMinOrderByAggregateInputSchema } from './TagMinOrderByAggregateInputSchema';
import { TagSumOrderByAggregateInputSchema } from './TagSumOrderByAggregateInputSchema';

export const TagOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagSumOrderByAggregateInputSchema).optional()
}).strict();

export default TagOrderByWithAggregationInputSchema;
