import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const DailyFocusMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DailyFocusMaxOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DailyFocusMaxOrderByAggregateInputSchema;