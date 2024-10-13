import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { ServingCountOrderByAggregateInputSchema } from '../ServingCountOrderByAggregateInputSchema.js';
import { ServingAvgOrderByAggregateInputSchema } from '../ServingAvgOrderByAggregateInputSchema.js';
import { ServingMaxOrderByAggregateInputSchema } from '../ServingMaxOrderByAggregateInputSchema.js';
import { ServingMinOrderByAggregateInputSchema } from '../ServingMinOrderByAggregateInputSchema.js';
import { ServingSumOrderByAggregateInputSchema } from '../ServingSumOrderByAggregateInputSchema.js';
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