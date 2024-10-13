import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanbanCreateManyInputSchema.js
export const KanbanCreateManyArgsSchema: z.ZodType<Prisma.KanbanCreateManyArgs> = z.object({
  data: z.union([ KanbanCreateManyInputSchema,KanbanCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default KanbanCreateManyArgsSchema;