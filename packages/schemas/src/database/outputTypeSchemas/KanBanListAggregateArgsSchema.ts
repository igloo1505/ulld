import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema.js'
import { KanBanListOrderByWithRelationInputSchema } from '../inputTypeSchemas/KanBanListOrderByWithRelationInputSchema.js'
import { KanBanListWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanListWhereUniqueInputSchema.js'
export const KanBanListAggregateArgsSchema: z.ZodType<Prisma.KanBanListAggregateArgs> = z.object({
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([ KanBanListOrderByWithRelationInputSchema.array(),KanBanListOrderByWithRelationInputSchema ]).optional(),
  cursor: KanBanListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default KanBanListAggregateArgsSchema;