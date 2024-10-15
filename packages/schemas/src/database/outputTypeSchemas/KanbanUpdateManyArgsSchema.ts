import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanbanUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanbanUpdateManyMutationInputSchema.js'
import { KanbanUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanbanUncheckedUpdateManyInputSchema.js'
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema.js'
export const KanbanUpdateManyArgsSchema: z.ZodType<Prisma.KanbanUpdateManyArgs> = z.object({
  data: z.union([ KanbanUpdateManyMutationInputSchema,KanbanUncheckedUpdateManyInputSchema ]),
  where: KanbanWhereInputSchema.optional(),
}).strict() ;
export default KanbanUpdateManyArgsSchema;