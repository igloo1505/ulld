import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanbanWhereInputSchema } from '../inputTypeSchemas/KanbanWhereInputSchema.js'
import { KanbanOrderByWithAggregationInputSchema } from '../inputTypeSchemas/KanbanOrderByWithAggregationInputSchema.js'
import { KanbanScalarFieldEnumSchema } from '../inputTypeSchemas/KanbanScalarFieldEnumSchema.js'
import { KanbanScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/KanbanScalarWhereWithAggregatesInputSchema.js'
export const KanbanGroupByArgsSchema: z.ZodType<Prisma.KanbanGroupByArgs> = z.object({
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([ KanbanOrderByWithAggregationInputSchema.array(),KanbanOrderByWithAggregationInputSchema ]).optional(),
  by: KanbanScalarFieldEnumSchema.array(),
  having: KanbanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default KanbanGroupByArgsSchema;