import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RelatedValuesCountOutputTypeSelectSchema: z.ZodType<Prisma.RelatedValuesCountOutputTypeSelect> = z.object({
  equations: z.boolean().optional(),
}).strict();

export default RelatedValuesCountOutputTypeSelectSchema;
