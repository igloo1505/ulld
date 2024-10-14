import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CitationsGroupUncheckedCreateWithoutEntriesInputSchema: z.ZodType<Prisma.CitationsGroupUncheckedCreateWithoutEntriesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export default CitationsGroupUncheckedCreateWithoutEntriesInputSchema;
