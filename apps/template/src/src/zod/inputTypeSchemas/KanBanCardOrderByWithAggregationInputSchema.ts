import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { KanBanCardCountOrderByAggregateInputSchema } from './KanBanCardCountOrderByAggregateInputSchema';
import { KanBanCardAvgOrderByAggregateInputSchema } from './KanBanCardAvgOrderByAggregateInputSchema';
import { KanBanCardMaxOrderByAggregateInputSchema } from './KanBanCardMaxOrderByAggregateInputSchema';
import { KanBanCardMinOrderByAggregateInputSchema } from './KanBanCardMinOrderByAggregateInputSchema';
import { KanBanCardSumOrderByAggregateInputSchema } from './KanBanCardSumOrderByAggregateInputSchema';

export const KanBanCardOrderByWithAggregationInputSchema: z.ZodType<Prisma.KanBanCardOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  details: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => KanBanCardCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => KanBanCardAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KanBanCardMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KanBanCardMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => KanBanCardSumOrderByAggregateInputSchema).optional()
}).strict();

export default KanBanCardOrderByWithAggregationInputSchema;
