import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const DailyFocusCountOrderByAggregateInputSchema: z.ZodType<Prisma.DailyFocusCountOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DailyFocusCountOrderByAggregateInputSchema;