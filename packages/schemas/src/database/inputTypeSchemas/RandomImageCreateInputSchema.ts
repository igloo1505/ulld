import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const RandomImageCreateInputSchema: z.ZodType<Prisma.RandomImageCreateInput> = z.object({
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export default RandomImageCreateInputSchema;