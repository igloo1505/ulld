import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DietCountOrderByAggregateInputSchema } from './DietCountOrderByAggregateInputSchema';
import { DietAvgOrderByAggregateInputSchema } from './DietAvgOrderByAggregateInputSchema';
import { DietMaxOrderByAggregateInputSchema } from './DietMaxOrderByAggregateInputSchema';
import { DietMinOrderByAggregateInputSchema } from './DietMinOrderByAggregateInputSchema';
import { DietSumOrderByAggregateInputSchema } from './DietSumOrderByAggregateInputSchema';

export const DietOrderByWithAggregationInputSchema: z.ZodType<Prisma.DietOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  summary: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  activelyFollowing: z.lazy(() => SortOrderSchema).optional(),
  gf: z.lazy(() => SortOrderSchema).optional(),
  vegan: z.lazy(() => SortOrderSchema).optional(),
  pescatarian: z.lazy(() => SortOrderSchema).optional(),
  vegetarian: z.lazy(() => SortOrderSchema).optional(),
  fasting: z.lazy(() => SortOrderSchema).optional(),
  cardioTraining: z.lazy(() => SortOrderSchema).optional(),
  weightTraining: z.lazy(() => SortOrderSchema).optional(),
  carb: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pro: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fat: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  goals: z.lazy(() => SortOrderSchema).optional(),
  created: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DietCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DietAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DietMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DietMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DietSumOrderByAggregateInputSchema).optional()
}).strict();

export default DietOrderByWithAggregationInputSchema;
