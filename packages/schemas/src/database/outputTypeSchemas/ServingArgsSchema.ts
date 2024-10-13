import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ServingSelectSchema.js
..//inputTypeSchemas/ServingIncludeSchema.js
export const ServingArgsSchema: z.ZodType<Prisma.ServingDefaultArgs> = z.object({
  select: z.lazy(() => ServingSelectSchema).optional(),
  include: z.lazy(() => ServingIncludeSchema).optional(),
}).strict();
export default ServingArgsSchema;