import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SubjectCountOrderByAggregateInputSchema } from './SubjectCountOrderByAggregateInputSchema';
import { SubjectAvgOrderByAggregateInputSchema } from './SubjectAvgOrderByAggregateInputSchema';
import { SubjectMaxOrderByAggregateInputSchema } from './SubjectMaxOrderByAggregateInputSchema';
import { SubjectMinOrderByAggregateInputSchema } from './SubjectMinOrderByAggregateInputSchema';
import { SubjectSumOrderByAggregateInputSchema } from './SubjectSumOrderByAggregateInputSchema';

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
