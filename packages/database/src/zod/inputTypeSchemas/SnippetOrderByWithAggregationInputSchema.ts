import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SnippetCountOrderByAggregateInputSchema } from './SnippetCountOrderByAggregateInputSchema';
import { SnippetAvgOrderByAggregateInputSchema } from './SnippetAvgOrderByAggregateInputSchema';
import { SnippetMaxOrderByAggregateInputSchema } from './SnippetMaxOrderByAggregateInputSchema';
import { SnippetMinOrderByAggregateInputSchema } from './SnippetMinOrderByAggregateInputSchema';
import { SnippetSumOrderByAggregateInputSchema } from './SnippetSumOrderByAggregateInputSchema';

export const SnippetOrderByWithAggregationInputSchema: z.ZodType<Prisma.SnippetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SnippetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SnippetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SnippetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SnippetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SnippetSumOrderByAggregateInputSchema).optional()
}).strict();

export default SnippetOrderByWithAggregationInputSchema;
