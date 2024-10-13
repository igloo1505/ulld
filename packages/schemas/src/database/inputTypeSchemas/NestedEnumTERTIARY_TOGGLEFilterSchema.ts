import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from '../TERTIARY_TOGGLESchema.js';
export const NestedEnumTERTIARY_TOGGLEFilterSchema: z.ZodType<Prisma.NestedEnumTERTIARY_TOGGLEFilter> = z.object({
  equals: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  in: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  notIn: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  not: z.union([ z.lazy(() => TERTIARY_TOGGLESchema),z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema) ]).optional(),
}).strict();
export default NestedEnumTERTIARY_TOGGLEFilterSchema;