import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanCardWhereInputSchema } from '../inputTypeSchemas/KanBanCardWhereInputSchema'
import { KanBanCardOrderByWithAggregationInputSchema } from '../inputTypeSchemas/KanBanCardOrderByWithAggregationInputSchema'
import { KanBanCardScalarFieldEnumSchema } from '../inputTypeSchemas/KanBanCardScalarFieldEnumSchema'
import { KanBanCardScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/KanBanCardScalarWhereWithAggregatesInputSchema'

export const KanBanCardGroupByArgsSchema: z.ZodType<Prisma.KanBanCardGroupByArgs> = z.object({
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([ KanBanCardOrderByWithAggregationInputSchema.array(),KanBanCardOrderByWithAggregationInputSchema ]).optional(),
  by: KanBanCardScalarFieldEnumSchema.array(),
  having: KanBanCardScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default KanBanCardGroupByArgsSchema;
