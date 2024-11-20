import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SubjectCreateManyInputSchema: z.ZodType<Prisma.SubjectCreateManyInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();

export default SubjectCreateManyInputSchema;
