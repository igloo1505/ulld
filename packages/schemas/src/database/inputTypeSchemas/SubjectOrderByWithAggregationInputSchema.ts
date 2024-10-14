import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { SubjectCountOrderByAggregateInputSchema } from './SubjectCountOrderByAggregateInputSchema.js';
import { SubjectAvgOrderByAggregateInputSchema } from './SubjectAvgOrderByAggregateInputSchema.js';
import { SubjectMaxOrderByAggregateInputSchema } from './SubjectMaxOrderByAggregateInputSchema.js';
import { SubjectMinOrderByAggregateInputSchema } from './SubjectMinOrderByAggregateInputSchema.js';
import { SubjectSumOrderByAggregateInputSchema } from './SubjectSumOrderByAggregateInputSchema.js';
export const SubjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubjectOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SubjectCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SubjectAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SubjectMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SubjectMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SubjectSumOrderByAggregateInputSchema).optional()
}).strict();
export default SubjectOrderByWithAggregationInputSchema;