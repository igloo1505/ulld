import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema'
import { KanBanListOrderByWithRelationInputSchema } from '../inputTypeSchemas/KanBanListOrderByWithRelationInputSchema'
import { KanBanListWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanListWhereUniqueInputSchema'

export const KanBanListAggregateArgsSchema: z.ZodType<Prisma.KanBanListAggregateArgs> = z.object({
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([ KanBanListOrderByWithRelationInputSchema.array(),KanBanListOrderByWithRelationInputSchema ]).optional(),
  cursor: KanBanListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default KanBanListAggregateArgsSchema;
