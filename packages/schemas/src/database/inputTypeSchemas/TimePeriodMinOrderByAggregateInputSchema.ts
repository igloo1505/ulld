import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const TimePeriodMinOrderByAggregateInputSchema: z.ZodType<Prisma.TimePeriodMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  dietId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TimePeriodMinOrderByAggregateInputSchema;