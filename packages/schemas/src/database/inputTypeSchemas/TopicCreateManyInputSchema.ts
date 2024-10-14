import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TopicCreateManyInputSchema: z.ZodType<Prisma.TopicCreateManyInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();

export default TopicCreateManyInputSchema;
