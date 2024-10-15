import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const TimePeriodOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TimePeriodOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default TimePeriodOrderByRelationAggregateInputSchema;