import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DailyFocusMinOrderByAggregateInputSchema: z.ZodType<Prisma.DailyFocusMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DailyFocusMinOrderByAggregateInputSchema;