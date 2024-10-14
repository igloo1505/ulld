import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const CitationsGroupScalarWhereInputSchema: z.ZodType<Prisma.CitationsGroupScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CitationsGroupScalarWhereInputSchema),z.lazy(() => CitationsGroupScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CitationsGroupScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CitationsGroupScalarWhereInputSchema),z.lazy(() => CitationsGroupScalarWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default CitationsGroupScalarWhereInputSchema;
