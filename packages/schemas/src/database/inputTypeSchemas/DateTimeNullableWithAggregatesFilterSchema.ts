import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { NestedDateTimeNullableWithAggregatesFilterSchema } from '../NestedDateTimeNullableWithAggregatesFilterSchema.js';
import { NestedIntNullableFilterSchema } from '../NestedIntNullableFilterSchema.js';
import { NestedDateTimeNullableFilterSchema } from '../NestedDateTimeNullableFilterSchema.js';
export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();
export default DateTimeNullableWithAggregatesFilterSchema;