import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TimePeriodAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TimePeriodAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TimePeriodAvgOrderByAggregateInputSchema;