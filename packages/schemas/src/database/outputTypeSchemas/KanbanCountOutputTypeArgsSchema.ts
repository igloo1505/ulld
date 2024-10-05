import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanCountOutputTypeSelectSchema } from './KanbanCountOutputTypeSelectSchema';

export const KanbanCountOutputTypeArgsSchema: z.ZodType<Prisma.KanbanCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => KanbanCountOutputTypeSelectSchema).nullish(),
}).strict();

export default KanbanCountOutputTypeSelectSchema;
