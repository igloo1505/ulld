import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema';

export const NestedEnumQUANTITY_GUESSNullableFilterSchema: z.ZodType<Prisma.NestedEnumQUANTITY_GUESSNullableFilter> = z.object({
  equals: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  in: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => QUANTITY_GUESSSchema),z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumQUANTITY_GUESSNullableFilterSchema;
