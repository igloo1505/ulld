import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema'
import { KanbanOrderByWithAggregationInputSchema } from '../inputTypeSchemas/KanbanOrderByWithAggregationInputSchema'
import { KanbanScalarFieldEnumSchema } from '../inputTypeSchemas/KanbanScalarFieldEnumSchema'
import { KanbanScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/KanbanScalarWhereWithAggregatesInputSchema'

export const KanbanGroupByArgsSchema: z.ZodType<Prisma.KanbanGroupByArgs> = z.object({
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([ KanbanOrderByWithAggregationInputSchema.array(),KanbanOrderByWithAggregationInputSchema ]).optional(),
  by: KanbanScalarFieldEnumSchema.array(),
  having: KanbanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default KanbanGroupByArgsSchema;
