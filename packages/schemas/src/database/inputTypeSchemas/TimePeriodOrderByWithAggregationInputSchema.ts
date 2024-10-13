import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { TimePeriodCountOrderByAggregateInputSchema } from '../TimePeriodCountOrderByAggregateInputSchema.js';
import { TimePeriodAvgOrderByAggregateInputSchema } from '../TimePeriodAvgOrderByAggregateInputSchema.js';
import { TimePeriodMaxOrderByAggregateInputSchema } from '../TimePeriodMaxOrderByAggregateInputSchema.js';
import { TimePeriodMinOrderByAggregateInputSchema } from '../TimePeriodMinOrderByAggregateInputSchema.js';
import { TimePeriodSumOrderByAggregateInputSchema } from '../TimePeriodSumOrderByAggregateInputSchema.js';
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