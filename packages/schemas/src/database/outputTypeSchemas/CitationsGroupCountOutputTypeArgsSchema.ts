import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { CitationsGroupCountOutputTypeSelectSchema } from './CitationsGroupCountOutputTypeSelectSchema.js';
export const CitationsGroupCountOutputTypeArgsSchema: z.ZodType<Prisma.CitationsGroupCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CitationsGroupCountOutputTypeSelectSchema).nullish(),
}).strict();
export default CitationsGroupCountOutputTypeSelectSchema;