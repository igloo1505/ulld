import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const DailyFocusWhereInputSchema: z.ZodType<Prisma.DailyFocusWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DailyFocusWhereInputSchema),z.lazy(() => DailyFocusWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DailyFocusWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DailyFocusWhereInputSchema),z.lazy(() => DailyFocusWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DailyFocusWhereInputSchema;
