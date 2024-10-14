import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagCreateManyKanbanInputSchema: z.ZodType<Prisma.TagCreateManyKanbanInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();

export default TagCreateManyKanbanInputSchema;
