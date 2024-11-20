import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RandomImageCountOrderByAggregateInputSchema } from './RandomImageCountOrderByAggregateInputSchema';
import { RandomImageMaxOrderByAggregateInputSchema } from './RandomImageMaxOrderByAggregateInputSchema';
import { RandomImageMinOrderByAggregateInputSchema } from './RandomImageMinOrderByAggregateInputSchema';

export const RandomImageOrderByWithAggregationInputSchema: z.ZodType<Prisma.RandomImageOrderByWithAggregationInput> = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RandomImageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RandomImageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RandomImageMinOrderByAggregateInputSchema).optional()
}).strict();

export default RandomImageOrderByWithAggregationInputSchema;
