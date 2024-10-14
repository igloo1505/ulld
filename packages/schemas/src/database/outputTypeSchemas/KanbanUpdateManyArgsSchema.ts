import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanUpdateManyMutationInputSchema } from '../inputTypeSchemas/KanbanUpdateManyMutationInputSchema'
import { KanbanUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/KanbanUncheckedUpdateManyInputSchema'
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema'

export const KanbanUpdateManyArgsSchema: z.ZodType<Prisma.KanbanUpdateManyArgs> = z.object({
  data: z.union([ KanbanUpdateManyMutationInputSchema,KanbanUncheckedUpdateManyInputSchema ]),
  where: KanbanWhereInputSchema.optional(),
}).strict() ;

export default KanbanUpdateManyArgsSchema;
