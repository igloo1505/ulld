import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const RandomImageSelectSchema: z.ZodType<Prisma.RandomImageSelect> = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export default RandomImageSelectSchema;