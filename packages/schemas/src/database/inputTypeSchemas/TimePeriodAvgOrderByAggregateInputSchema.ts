import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TimePeriodAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TimePeriodAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TimePeriodAvgOrderByAggregateInputSchema;
