import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RelatedValuesCreateequationIdInputSchema: z.ZodType<Prisma.RelatedValuesCreateequationIdInput> = z.object({
  set: z.number().array()
}).strict();

export default RelatedValuesCreateequationIdInputSchema;
