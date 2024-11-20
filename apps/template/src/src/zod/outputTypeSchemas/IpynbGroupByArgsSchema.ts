import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema'
import { IpynbOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IpynbOrderByWithAggregationInputSchema'
import { IpynbScalarFieldEnumSchema } from '../inputTypeSchemas/IpynbScalarFieldEnumSchema'
import { IpynbScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IpynbScalarWhereWithAggregatesInputSchema'

export const IpynbGroupByArgsSchema: z.ZodType<Prisma.IpynbGroupByArgs> = z.object({
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([ IpynbOrderByWithAggregationInputSchema.array(),IpynbOrderByWithAggregationInputSchema ]).optional(),
  by: IpynbScalarFieldEnumSchema.array(),
  having: IpynbScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default IpynbGroupByArgsSchema;
