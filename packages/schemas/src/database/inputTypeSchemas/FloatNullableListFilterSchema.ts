import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FloatNullableListFilterSchema: z.ZodType<Prisma.FloatNullableListFilter> = z.object({
  equals: z.number().array().optional().nullable(),
  has: z.number().optional().nullable(),
  hasEvery: z.number().array().optional(),
  hasSome: z.number().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export default FloatNullableListFilterSchema;
