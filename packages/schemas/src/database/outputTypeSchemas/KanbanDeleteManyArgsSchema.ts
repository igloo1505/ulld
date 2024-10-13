import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanbanWhereInputSchema.js
export const KanbanDeleteManyArgsSchema: z.ZodType<Prisma.KanbanDeleteManyArgs> = z.object({
  where: KanbanWhereInputSchema.optional(),
}).strict() ;
export default KanbanDeleteManyArgsSchema;