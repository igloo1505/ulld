import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { DailyFocusCountOrderByAggregateInputSchema } from './DailyFocusCountOrderByAggregateInputSchema.js';
import { DailyFocusMaxOrderByAggregateInputSchema } from './DailyFocusMaxOrderByAggregateInputSchema.js';
import { DailyFocusMinOrderByAggregateInputSchema } from './DailyFocusMinOrderByAggregateInputSchema.js';
export const DailyFocusOrderByWithAggregationInputSchema: z.ZodType<Prisma.DailyFocusOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DailyFocusCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DailyFocusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DailyFocusMinOrderByAggregateInputSchema).optional()
}).strict();
export default DailyFocusOrderByWithAggregationInputSchema;