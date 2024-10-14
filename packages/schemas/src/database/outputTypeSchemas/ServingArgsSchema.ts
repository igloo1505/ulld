import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { ServingSelectSchema } from '../inputTypeSchemas/ServingSelectSchema.js';
import { ServingIncludeSchema } from '../inputTypeSchemas/ServingIncludeSchema.js';
export const ServingArgsSchema: z.ZodType<Prisma.ServingDefaultArgs> = z.object({
  select: z.lazy(() => ServingSelectSchema).optional(),
  include: z.lazy(() => ServingIncludeSchema).optional(),
}).strict();
export default ServingArgsSchema;