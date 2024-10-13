import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { ReadingListCountOrderByAggregateInputSchema } from '../ReadingListCountOrderByAggregateInputSchema.js';
import { ReadingListMaxOrderByAggregateInputSchema } from '../ReadingListMaxOrderByAggregateInputSchema.js';
import { ReadingListMinOrderByAggregateInputSchema } from '../ReadingListMinOrderByAggregateInputSchema.js';
export const ReadingListOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReadingListOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReadingListCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReadingListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReadingListMinOrderByAggregateInputSchema).optional()
}).strict();
export default ReadingListOrderByWithAggregationInputSchema;