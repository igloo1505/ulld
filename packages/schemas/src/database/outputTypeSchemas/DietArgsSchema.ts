import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietSelectSchema.js
..//inputTypeSchemas/DietIncludeSchema.js
export const DietArgsSchema: z.ZodType<Prisma.DietDefaultArgs> = z.object({
  select: z.lazy(() => DietSelectSchema).optional(),
  include: z.lazy(() => DietIncludeSchema).optional(),
}).strict();
export default DietArgsSchema;