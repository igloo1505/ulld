import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RelatedValuesUpdateequationIdInputSchema: z.ZodType<Prisma.RelatedValuesUpdateequationIdInput> = z.object({
  set: z.number().array().optional(),
  push: z.union([ z.number(),z.number().array() ]).optional(),
}).strict();

export default RelatedValuesUpdateequationIdInputSchema;
