import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { CitationsGroupCountOrderByAggregateInputSchema } from '../CitationsGroupCountOrderByAggregateInputSchema.js';
import { CitationsGroupMaxOrderByAggregateInputSchema } from '../CitationsGroupMaxOrderByAggregateInputSchema.js';
import { CitationsGroupMinOrderByAggregateInputSchema } from '../CitationsGroupMinOrderByAggregateInputSchema.js';
export const CitationsGroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.CitationsGroupOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CitationsGroupCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CitationsGroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CitationsGroupMinOrderByAggregateInputSchema).optional()
}).strict();
export default CitationsGroupOrderByWithAggregationInputSchema;