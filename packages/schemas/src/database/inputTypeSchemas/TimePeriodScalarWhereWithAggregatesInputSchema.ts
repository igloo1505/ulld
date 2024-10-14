import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const TimePeriodScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TimePeriodScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema),z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema),z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  start: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  end: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  dietId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default TimePeriodScalarWhereWithAggregatesInputSchema;
