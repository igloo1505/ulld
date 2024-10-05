import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ServingCountOrderByAggregateInputSchema } from './ServingCountOrderByAggregateInputSchema';
import { ServingAvgOrderByAggregateInputSchema } from './ServingAvgOrderByAggregateInputSchema';
import { ServingMaxOrderByAggregateInputSchema } from './ServingMaxOrderByAggregateInputSchema';
import { ServingMinOrderByAggregateInputSchema } from './ServingMinOrderByAggregateInputSchema';
import { ServingSumOrderByAggregateInputSchema } from './ServingSumOrderByAggregateInputSchema';

export const ServingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dietaryItemId: z.lazy(() => SortOrderSchema).optional(),
  quant_oz: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  quant_guess: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ServingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ServingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ServingSumOrderByAggregateInputSchema).optional()
}).strict();

export default ServingOrderByWithAggregationInputSchema;
