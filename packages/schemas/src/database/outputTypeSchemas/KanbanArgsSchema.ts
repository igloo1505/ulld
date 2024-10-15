import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanbanSelectSchema } from '../inputTypeSchemas/KanbanSelectSchema.js';
import { KanbanIncludeSchema } from '../inputTypeSchemas/KanbanIncludeSchema.js';
export const KanbanArgsSchema: z.ZodType<Prisma.KanbanDefaultArgs> = z.object({
  select: z.lazy(() => KanbanSelectSchema).optional(),
  include: z.lazy(() => KanbanIncludeSchema).optional(),
}).strict();
export default KanbanArgsSchema;