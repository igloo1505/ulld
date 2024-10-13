import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { ImageAlignmentSchema } from '../ImageAlignmentSchema.js';
import { NestedIntFilterSchema } from '../NestedIntFilterSchema.js';
import { NestedEnumImageAlignmentFilterSchema } from '../NestedEnumImageAlignmentFilterSchema.js';
export const NestedEnumImageAlignmentWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumImageAlignmentWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([ z.lazy(() => ImageAlignmentSchema),z.lazy(() => NestedEnumImageAlignmentWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumImageAlignmentFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumImageAlignmentFilterSchema).optional()
}).strict();
export default NestedEnumImageAlignmentWithAggregatesFilterSchema;