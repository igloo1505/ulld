import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QUANTITY_GUESSSchema } from './QUANTITY_GUESSSchema.js';
import { NestedEnumQUANTITY_GUESSNullableFilterSchema } from './NestedEnumQUANTITY_GUESSNullableFilterSchema.js';
export const EnumQUANTITY_GUESSNullableFilterSchema: z.ZodType<Prisma.EnumQUANTITY_GUESSNullableFilter> = z.object({
  equals: z.lazy(() => QUANTITY_GUESSSchema).optional().nullable(),
  in: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  notIn: z.lazy(() => QUANTITY_GUESSSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => QUANTITY_GUESSSchema),z.lazy(() => NestedEnumQUANTITY_GUESSNullableFilterSchema) ]).optional().nullable(),
}).strict();
export default EnumQUANTITY_GUESSNullableFilterSchema;