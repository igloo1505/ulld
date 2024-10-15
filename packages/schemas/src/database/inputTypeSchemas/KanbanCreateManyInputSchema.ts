import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const KanbanCreateManyInputSchema: z.ZodType<Prisma.KanbanCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional()
}).strict();
export default KanbanCreateManyInputSchema;