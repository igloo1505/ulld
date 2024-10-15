import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QueryModeSchema } from './QueryModeSchema.js';
import { NestedStringNullableWithAggregatesFilterSchema } from './NestedStringNullableWithAggregatesFilterSchema.js';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema.js';
import { NestedStringNullableFilterSchema } from './NestedStringNullableFilterSchema.js';
export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();
export default StringNullableWithAggregatesFilterSchema;