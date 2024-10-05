import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TimePeriodWhereInputSchema } from './TimePeriodWhereInputSchema';

export const TimePeriodListRelationFilterSchema: z.ZodType<Prisma.TimePeriodListRelationFilter> = z.object({
  every: z.lazy(() => TimePeriodWhereInputSchema).optional(),
  some: z.lazy(() => TimePeriodWhereInputSchema).optional(),
  none: z.lazy(() => TimePeriodWhereInputSchema).optional()
}).strict();

export default TimePeriodListRelationFilterSchema;
