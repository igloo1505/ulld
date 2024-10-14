import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ReadingListCountOrderByAggregateInputSchema } from './ReadingListCountOrderByAggregateInputSchema';
import { ReadingListMaxOrderByAggregateInputSchema } from './ReadingListMaxOrderByAggregateInputSchema';
import { ReadingListMinOrderByAggregateInputSchema } from './ReadingListMinOrderByAggregateInputSchema';

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
