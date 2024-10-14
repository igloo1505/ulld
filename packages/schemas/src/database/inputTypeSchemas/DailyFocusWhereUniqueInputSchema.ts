import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DailyFocusWhereInputSchema } from './DailyFocusWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const DailyFocusWhereUniqueInputSchema: z.ZodType<Prisma.DailyFocusWhereUniqueInput> = z.object({
  value: z.string()
})
.and(z.object({
  value: z.string().optional(),
  AND: z.union([ z.lazy(() => DailyFocusWhereInputSchema),z.lazy(() => DailyFocusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DailyFocusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DailyFocusWhereInputSchema),z.lazy(() => DailyFocusWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default DailyFocusWhereUniqueInputSchema;
