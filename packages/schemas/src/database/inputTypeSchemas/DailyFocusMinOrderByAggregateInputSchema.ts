import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DailyFocusMinOrderByAggregateInputSchema: z.ZodType<Prisma.DailyFocusMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DailyFocusMinOrderByAggregateInputSchema;
