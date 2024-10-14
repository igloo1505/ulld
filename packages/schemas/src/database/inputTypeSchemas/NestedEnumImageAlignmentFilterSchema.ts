import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema';

export const NestedEnumImageAlignmentFilterSchema: z.ZodType<Prisma.NestedEnumImageAlignmentFilter> = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([ z.lazy(() => ImageAlignmentSchema),z.lazy(() => NestedEnumImageAlignmentFilterSchema) ]).optional(),
}).strict();

export default NestedEnumImageAlignmentFilterSchema;
