import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const DailyFocusScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DailyFocusScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema),z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema),z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DailyFocusScalarWhereWithAggregatesInputSchema;
