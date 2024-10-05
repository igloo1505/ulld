import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema'
import { BusinessContactOrderByWithRelationInputSchema } from '../inputTypeSchemas/BusinessContactOrderByWithRelationInputSchema'
import { BusinessContactWhereUniqueInputSchema } from '../inputTypeSchemas/BusinessContactWhereUniqueInputSchema'

export const BusinessContactAggregateArgsSchema: z.ZodType<Prisma.BusinessContactAggregateArgs> = z.object({
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([ BusinessContactOrderByWithRelationInputSchema.array(),BusinessContactOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BusinessContactAggregateArgsSchema;
