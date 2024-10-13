import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { NestedIntNullableFilterSchema } from '../NestedIntNullableFilterSchema.js';
import { NestedBoolNullableFilterSchema } from '../NestedBoolNullableFilterSchema.js';
export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();
export default NestedBoolNullableWithAggregatesFilterSchema;