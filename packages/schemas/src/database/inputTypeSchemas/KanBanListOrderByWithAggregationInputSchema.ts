import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { KanBanListCountOrderByAggregateInputSchema } from './KanBanListCountOrderByAggregateInputSchema';
import { KanBanListAvgOrderByAggregateInputSchema } from './KanBanListAvgOrderByAggregateInputSchema';
import { KanBanListMaxOrderByAggregateInputSchema } from './KanBanListMaxOrderByAggregateInputSchema';
import { KanBanListMinOrderByAggregateInputSchema } from './KanBanListMinOrderByAggregateInputSchema';
import { KanBanListSumOrderByAggregateInputSchema } from './KanBanListSumOrderByAggregateInputSchema';

export const KanBanListOrderByWithAggregationInputSchema: z.ZodType<Prisma.KanBanListOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  boardId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => KanBanListCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => KanBanListAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => KanBanListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => KanBanListMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => KanBanListSumOrderByAggregateInputSchema).optional()
}).strict();

export default KanBanListOrderByWithAggregationInputSchema;
