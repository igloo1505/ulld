import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumQUANTITY_GUESSNullableFilterSchema } from './NestedEnumQUANTITY_GUESSNullableFilterSchema';

export const NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumQUANTITY_GUESSNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  in: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => QUANTITY_GUESSSchema),z.lazy(() => NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema).optional()
}).strict();

export default NestedEnumQUANTITY_GUESSNullableWithAggregatesFilterSchema;
