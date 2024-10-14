import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TimePeriodOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TimePeriodOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TimePeriodOrderByRelationAggregateInputSchema;
