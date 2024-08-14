import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema';
import { NestedEnumImageAlignmentFilterSchema } from './NestedEnumImageAlignmentFilterSchema';

export const EnumImageAlignmentFilterSchema: z.ZodType<Prisma.EnumImageAlignmentFilter> = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([ z.lazy(() => ImageAlignmentSchema),z.lazy(() => NestedEnumImageAlignmentFilterSchema) ]).optional(),
}).strict();

export default EnumImageAlignmentFilterSchema;
