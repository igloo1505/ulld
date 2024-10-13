import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RelatedValuesCountOutputTypeSelectSchema } from '../RelatedValuesCountOutputTypeSelectSchema.js';
export const RelatedValuesCountOutputTypeArgsSchema: z.ZodType<Prisma.RelatedValuesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RelatedValuesCountOutputTypeSelectSchema).nullish(),
}).strict();
export default RelatedValuesCountOutputTypeSelectSchema;