import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { BibCountOrderByAggregateInputSchema } from '../BibCountOrderByAggregateInputSchema.js';
import { BibAvgOrderByAggregateInputSchema } from '../BibAvgOrderByAggregateInputSchema.js';
import { BibMaxOrderByAggregateInputSchema } from '../BibMaxOrderByAggregateInputSchema.js';
import { BibMinOrderByAggregateInputSchema } from '../BibMinOrderByAggregateInputSchema.js';
import { BibSumOrderByAggregateInputSchema } from '../BibSumOrderByAggregateInputSchema.js';
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