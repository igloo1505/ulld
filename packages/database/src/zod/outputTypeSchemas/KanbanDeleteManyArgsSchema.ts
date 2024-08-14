import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema'

export const KanbanDeleteManyArgsSchema: z.ZodType<Prisma.KanbanDeleteManyArgs> = z.object({
  where: KanbanWhereInputSchema.optional(),
}).strict() ;

export default KanbanDeleteManyArgsSchema;
