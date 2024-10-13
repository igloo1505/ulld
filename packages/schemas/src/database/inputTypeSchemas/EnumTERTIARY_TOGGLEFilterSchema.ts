import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from '../TERTIARY_TOGGLESchema.js';
import { NestedEnumTERTIARY_TOGGLEFilterSchema } from '../NestedEnumTERTIARY_TOGGLEFilterSchema.js';
export const EnumTERTIARY_TOGGLEFilterSchema: z.ZodType<Prisma.EnumTERTIARY_TOGGLEFilter> = z.object({
  equals: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  in: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  notIn: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  not: z.union([ z.lazy(() => TERTIARY_TOGGLESchema),z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema) ]).optional(),
}).strict();
export default EnumTERTIARY_TOGGLEFilterSchema;