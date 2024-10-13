import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/KanbanUpdateManyMutationInputSchema.js
..//inputTypeSchemas/KanbanUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/KanbanWhereInputSchema.js
export const KanbanUpdateManyArgsSchema: z.ZodType<Prisma.KanbanUpdateManyArgs> = z.object({
  data: z.union([ KanbanUpdateManyMutationInputSchema,KanbanUncheckedUpdateManyInputSchema ]),
  where: KanbanWhereInputSchema.optional(),
}).strict() ;
export default KanbanUpdateManyArgsSchema;