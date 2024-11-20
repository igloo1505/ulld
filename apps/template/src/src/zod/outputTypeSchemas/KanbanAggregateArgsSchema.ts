import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema'
import { KanbanOrderByWithRelationInputSchema } from '../inputTypeSchemas/KanbanOrderByWithRelationInputSchema'
import { KanbanWhereUniqueInputSchema } from '../inputTypeSchemas/KanbanWhereUniqueInputSchema'

export const KanbanAggregateArgsSchema: z.ZodType<Prisma.KanbanAggregateArgs> = z.object({
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([ KanbanOrderByWithRelationInputSchema.array(),KanbanOrderByWithRelationInputSchema ]).optional(),
  cursor: KanbanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default KanbanAggregateArgsSchema;
