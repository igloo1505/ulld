import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const TimePeriodScalarWhereInputSchema: z.ZodType<Prisma.TimePeriodScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TimePeriodScalarWhereInputSchema),z.lazy(() => TimePeriodScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TimePeriodScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TimePeriodScalarWhereInputSchema),z.lazy(() => TimePeriodScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  start: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  dietId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default TimePeriodScalarWhereInputSchema;
