import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanbanCountOutputTypeSelectSchema } from './KanbanCountOutputTypeSelectSchema.js';
export const KanbanCountOutputTypeArgsSchema: z.ZodType<Prisma.KanbanCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => KanbanCountOutputTypeSelectSchema).nullish(),
}).strict();
export default KanbanCountOutputTypeSelectSchema;