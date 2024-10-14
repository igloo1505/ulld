import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema.js';
import { NestedEnumImageAlignmentFilterSchema } from './NestedEnumImageAlignmentFilterSchema.js';
export const EnumImageAlignmentFilterSchema: z.ZodType<Prisma.EnumImageAlignmentFilter> = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([ z.lazy(() => ImageAlignmentSchema),z.lazy(() => NestedEnumImageAlignmentFilterSchema) ]).optional(),
}).strict();
export default EnumImageAlignmentFilterSchema;