import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanListWhereInputSchema } from '../inputTypeSchemas/KanBanListWhereInputSchema'
import { KanBanListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/KanBanListOrderByWithAggregationInputSchema'
import { KanBanListScalarFieldEnumSchema } from '../inputTypeSchemas/KanBanListScalarFieldEnumSchema'
import { KanBanListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/KanBanListScalarWhereWithAggregatesInputSchema'

export const KanBanListGroupByArgsSchema: z.ZodType<Prisma.KanBanListGroupByArgs> = z.object({
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([ KanBanListOrderByWithAggregationInputSchema.array(),KanBanListOrderByWithAggregationInputSchema ]).optional(),
  by: KanBanListScalarFieldEnumSchema.array(),
  having: KanBanListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default KanBanListGroupByArgsSchema;
