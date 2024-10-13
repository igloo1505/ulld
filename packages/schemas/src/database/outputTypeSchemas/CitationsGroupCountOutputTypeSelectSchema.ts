import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const CitationsGroupCountOutputTypeSelectSchema: z.ZodType<Prisma.CitationsGroupCountOutputTypeSelect> = z.object({
  entries: z.boolean().optional(),
}).strict();
export default CitationsGroupCountOutputTypeSelectSchema;