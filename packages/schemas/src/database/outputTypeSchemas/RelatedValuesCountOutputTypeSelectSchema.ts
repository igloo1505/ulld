import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const RelatedValuesCountOutputTypeSelectSchema: z.ZodType<Prisma.RelatedValuesCountOutputTypeSelect> = z.object({
  equations: z.boolean().optional(),
}).strict();
export default RelatedValuesCountOutputTypeSelectSchema;