import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DietaryItemCountOrderByAggregateInputSchema } from './DietaryItemCountOrderByAggregateInputSchema';
import { DietaryItemAvgOrderByAggregateInputSchema } from './DietaryItemAvgOrderByAggregateInputSchema';
import { DietaryItemMaxOrderByAggregateInputSchema } from './DietaryItemMaxOrderByAggregateInputSchema';
import { DietaryItemMinOrderByAggregateInputSchema } from './DietaryItemMinOrderByAggregateInputSchema';
import { DietaryItemSumOrderByAggregateInputSchema } from './DietaryItemSumOrderByAggregateInputSchema';

export const DietaryItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.DietaryItemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  barcode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  gi: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  calsPerOz: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  glutenFree: z.lazy(() => SortOrderSchema).optional(),
  minimalFructose: z.lazy(() => SortOrderSchema).optional(),
  natural: z.lazy(() => SortOrderSchema).optional(),
  organic: z.lazy(() => SortOrderSchema).optional(),
  impactScore: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DietaryItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DietaryItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DietaryItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DietaryItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DietaryItemSumOrderByAggregateInputSchema).optional()
}).strict();

export default DietaryItemOrderByWithAggregationInputSchema;
