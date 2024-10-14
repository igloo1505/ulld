import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanSelectSchema } from '../inputTypeSchemas/KanbanSelectSchema';
import { KanbanIncludeSchema } from '../inputTypeSchemas/KanbanIncludeSchema';

export const KanbanArgsSchema: z.ZodType<Prisma.KanbanDefaultArgs> = z.object({
  select: z.lazy(() => KanbanSelectSchema).optional(),
  include: z.lazy(() => KanbanIncludeSchema).optional(),
}).strict();

export default KanbanArgsSchema;
