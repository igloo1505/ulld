import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CitationsGroupCountOrderByAggregateInputSchema } from './CitationsGroupCountOrderByAggregateInputSchema';
import { CitationsGroupMaxOrderByAggregateInputSchema } from './CitationsGroupMaxOrderByAggregateInputSchema';
import { CitationsGroupMinOrderByAggregateInputSchema } from './CitationsGroupMinOrderByAggregateInputSchema';

export const CitationsGroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.CitationsGroupOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CitationsGroupCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CitationsGroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CitationsGroupMinOrderByAggregateInputSchema).optional()
}).strict();

export default CitationsGroupOrderByWithAggregationInputSchema;
