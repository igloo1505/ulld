import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const KanbanCountOutputTypeSelectSchema: z.ZodType<Prisma.KanbanCountOutputTypeSelect> = z.object({
  lists: z.boolean().optional(),
  tags: z.boolean().optional(),
  subjects: z.boolean().optional(),
  topics: z.boolean().optional(),
}).strict();
export default KanbanCountOutputTypeSelectSchema;