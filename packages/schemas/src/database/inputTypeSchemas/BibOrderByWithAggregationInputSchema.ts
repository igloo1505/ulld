import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BibCountOrderByAggregateInputSchema } from './BibCountOrderByAggregateInputSchema';
import { BibAvgOrderByAggregateInputSchema } from './BibAvgOrderByAggregateInputSchema';
import { BibMaxOrderByAggregateInputSchema } from './BibMaxOrderByAggregateInputSchema';
import { BibMinOrderByAggregateInputSchema } from './BibMinOrderByAggregateInputSchema';
import { BibSumOrderByAggregateInputSchema } from './BibSumOrderByAggregateInputSchema';

export const BibOrderByWithAggregationInputSchema: z.ZodType<Prisma.BibOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BibCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BibAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BibMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BibMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BibSumOrderByAggregateInputSchema).optional()
}).strict();

export default BibOrderByWithAggregationInputSchema;
