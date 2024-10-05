import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NestedBoolNullableFilterSchema } from './NestedBoolNullableFilterSchema';

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default BoolNullableFilterSchema;
