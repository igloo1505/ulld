import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { KanBanListCountOrderByAggregateInputSchema } from '../KanBanListCountOrderByAggregateInputSchema.js';
import { KanBanListAvgOrderByAggregateInputSchema } from '../KanBanListAvgOrderByAggregateInputSchema.js';
import { KanBanListMaxOrderByAggregateInputSchema } from '../KanBanListMaxOrderByAggregateInputSchema.js';
import { KanBanListMinOrderByAggregateInputSchema } from '../KanBanListMinOrderByAggregateInputSchema.js';
import { KanBanListSumOrderByAggregateInputSchema } from '../KanBanListSumOrderByAggregateInputSchema.js';
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