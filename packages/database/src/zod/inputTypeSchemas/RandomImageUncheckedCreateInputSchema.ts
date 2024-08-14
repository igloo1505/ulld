import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RandomImageUncheckedCreateInputSchema: z.ZodType<Prisma.RandomImageUncheckedCreateInput> = z.object({
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default RandomImageUncheckedCreateInputSchema;
