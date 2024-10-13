import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/CitationsGroupSelectSchema.js
..//inputTypeSchemas/CitationsGroupIncludeSchema.js
export const CitationsGroupArgsSchema: z.ZodType<Prisma.CitationsGroupDefaultArgs> = z.object({
  select: z.lazy(() => CitationsGroupSelectSchema).optional(),
  include: z.lazy(() => CitationsGroupIncludeSchema).optional(),
}).strict();
export default CitationsGroupArgsSchema;