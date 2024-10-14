import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TimePeriodSumOrderByAggregateInputSchema: z.ZodType<Prisma.TimePeriodSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TimePeriodSumOrderByAggregateInputSchema;
