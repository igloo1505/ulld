import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { DJTCountOrderByAggregateInputSchema } from './DJTCountOrderByAggregateInputSchema.js';
import { DJTAvgOrderByAggregateInputSchema } from './DJTAvgOrderByAggregateInputSchema.js';
import { DJTMaxOrderByAggregateInputSchema } from './DJTMaxOrderByAggregateInputSchema.js';
import { DJTMinOrderByAggregateInputSchema } from './DJTMinOrderByAggregateInputSchema.js';
import { DJTSumOrderByAggregateInputSchema } from './DJTSumOrderByAggregateInputSchema.js';
export const DJTOrderByWithAggregationInputSchema: z.ZodType<Prisma.DJTOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DJTCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DJTAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DJTMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DJTMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DJTSumOrderByAggregateInputSchema).optional()
}).strict();
export default DJTOrderByWithAggregationInputSchema;