import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CitationsGroupCountOutputTypeSelectSchema: z.ZodType<Prisma.CitationsGroupCountOutputTypeSelect> = z.object({
  entries: z.boolean().optional(),
}).strict();

export default CitationsGroupCountOutputTypeSelectSchema;
