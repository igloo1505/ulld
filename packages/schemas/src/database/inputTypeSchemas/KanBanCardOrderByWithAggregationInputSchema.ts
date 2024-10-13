import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { KanBanCardCountOrderByAggregateInputSchema } from '../KanBanCardCountOrderByAggregateInputSchema.js';
import { KanBanCardAvgOrderByAggregateInputSchema } from '../KanBanCardAvgOrderByAggregateInputSchema.js';
import { KanBanCardMaxOrderByAggregateInputSchema } from '../KanBanCardMaxOrderByAggregateInputSchema.js';
import { KanBanCardMinOrderByAggregateInputSchema } from '../KanBanCardMinOrderByAggregateInputSchema.js';
import { KanBanCardSumOrderByAggregateInputSchema } from '../KanBanCardSumOrderByAggregateInputSchema.js';
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