import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReadingListCreateManyInputSchema: z.ZodType<Prisma.ReadingListCreateManyInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional()
}).strict();

export default ReadingListCreateManyInputSchema;
