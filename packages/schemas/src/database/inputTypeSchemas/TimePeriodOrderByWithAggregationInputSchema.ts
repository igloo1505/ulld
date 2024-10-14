import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TimePeriodCountOrderByAggregateInputSchema } from './TimePeriodCountOrderByAggregateInputSchema';
import { TimePeriodAvgOrderByAggregateInputSchema } from './TimePeriodAvgOrderByAggregateInputSchema';
import { TimePeriodMaxOrderByAggregateInputSchema } from './TimePeriodMaxOrderByAggregateInputSchema';
import { TimePeriodMinOrderByAggregateInputSchema } from './TimePeriodMinOrderByAggregateInputSchema';
import { TimePeriodSumOrderByAggregateInputSchema } from './TimePeriodSumOrderByAggregateInputSchema';

export const TimePeriodOrderByWithAggregationInputSchema: z.ZodType<Prisma.TimePeriodOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dietId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TimePeriodCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TimePeriodAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TimePeriodMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TimePeriodMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TimePeriodSumOrderByAggregateInputSchema).optional()
}).strict();

export default TimePeriodOrderByWithAggregationInputSchema;
