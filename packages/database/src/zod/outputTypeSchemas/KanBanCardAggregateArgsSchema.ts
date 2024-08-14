import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanCardWhereInputSchema } from '../inputTypeSchemas/KanBanCardWhereInputSchema'
import { KanBanCardOrderByWithRelationInputSchema } from '../inputTypeSchemas/KanBanCardOrderByWithRelationInputSchema'
import { KanBanCardWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanCardWhereUniqueInputSchema'

export const KanBanCardAggregateArgsSchema: z.ZodType<Prisma.KanBanCardAggregateArgs> = z.object({
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([ KanBanCardOrderByWithRelationInputSchema.array(),KanBanCardOrderByWithRelationInputSchema ]).optional(),
  cursor: KanBanCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default KanBanCardAggregateArgsSchema;
