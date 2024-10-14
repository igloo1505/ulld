import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DailyFocusCountOrderByAggregateInputSchema } from './DailyFocusCountOrderByAggregateInputSchema';
import { DailyFocusMaxOrderByAggregateInputSchema } from './DailyFocusMaxOrderByAggregateInputSchema';
import { DailyFocusMinOrderByAggregateInputSchema } from './DailyFocusMinOrderByAggregateInputSchema';

export const DailyFocusOrderByWithAggregationInputSchema: z.ZodType<Prisma.DailyFocusOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DailyFocusCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DailyFocusMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DailyFocusMinOrderByAggregateInputSchema).optional()
}).strict();

export default DailyFocusOrderByWithAggregationInputSchema;
