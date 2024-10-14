import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DietCountOutputTypeSelectSchema } from './DietCountOutputTypeSelectSchema.js';
export const DietCountOutputTypeArgsSchema: z.ZodType<Prisma.DietCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DietCountOutputTypeSelectSchema).nullish(),
}).strict();
export default DietCountOutputTypeSelectSchema;