import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RelatedValuesCountOrderByAggregateInputSchema } from './RelatedValuesCountOrderByAggregateInputSchema';
import { RelatedValuesAvgOrderByAggregateInputSchema } from './RelatedValuesAvgOrderByAggregateInputSchema';
import { RelatedValuesMaxOrderByAggregateInputSchema } from './RelatedValuesMaxOrderByAggregateInputSchema';
import { RelatedValuesMinOrderByAggregateInputSchema } from './RelatedValuesMinOrderByAggregateInputSchema';
import { RelatedValuesSumOrderByAggregateInputSchema } from './RelatedValuesSumOrderByAggregateInputSchema';

export const RelatedValuesOrderByWithAggregationInputSchema: z.ZodType<Prisma.RelatedValuesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RelatedValuesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RelatedValuesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RelatedValuesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RelatedValuesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RelatedValuesSumOrderByAggregateInputSchema).optional()
}).strict();

export default RelatedValuesOrderByWithAggregationInputSchema;
