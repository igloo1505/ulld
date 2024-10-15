import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { TagCountOrderByAggregateInputSchema } from './TagCountOrderByAggregateInputSchema.js';
import { TagAvgOrderByAggregateInputSchema } from './TagAvgOrderByAggregateInputSchema.js';
import { TagMaxOrderByAggregateInputSchema } from './TagMaxOrderByAggregateInputSchema.js';
import { TagMinOrderByAggregateInputSchema } from './TagMinOrderByAggregateInputSchema.js';
import { TagSumOrderByAggregateInputSchema } from './TagSumOrderByAggregateInputSchema.js';
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