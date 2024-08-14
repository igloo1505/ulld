import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CitationsGroupCreateManyInputSchema: z.ZodType<Prisma.CitationsGroupCreateManyInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export default CitationsGroupCreateManyInputSchema;
