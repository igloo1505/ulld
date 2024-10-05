import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { QuoteCountOrderByAggregateInputSchema } from './QuoteCountOrderByAggregateInputSchema';
import { QuoteMaxOrderByAggregateInputSchema } from './QuoteMaxOrderByAggregateInputSchema';
import { QuoteMinOrderByAggregateInputSchema } from './QuoteMinOrderByAggregateInputSchema';

export const QuoteOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuoteOrderByWithAggregationInput> = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuoteCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuoteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuoteMinOrderByAggregateInputSchema).optional()
}).strict();

export default QuoteOrderByWithAggregationInputSchema;
