import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DJTCountOrderByAggregateInputSchema } from './DJTCountOrderByAggregateInputSchema';
import { DJTAvgOrderByAggregateInputSchema } from './DJTAvgOrderByAggregateInputSchema';
import { DJTMaxOrderByAggregateInputSchema } from './DJTMaxOrderByAggregateInputSchema';
import { DJTMinOrderByAggregateInputSchema } from './DJTMinOrderByAggregateInputSchema';
import { DJTSumOrderByAggregateInputSchema } from './DJTSumOrderByAggregateInputSchema';

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
