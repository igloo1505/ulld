import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema'
import { IpynbOrderByWithRelationInputSchema } from '../inputTypeSchemas/IpynbOrderByWithRelationInputSchema'
import { IpynbWhereUniqueInputSchema } from '../inputTypeSchemas/IpynbWhereUniqueInputSchema'

export const IpynbAggregateArgsSchema: z.ZodType<Prisma.IpynbAggregateArgs> = z.object({
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([ IpynbOrderByWithRelationInputSchema.array(),IpynbOrderByWithRelationInputSchema ]).optional(),
  cursor: IpynbWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default IpynbAggregateArgsSchema;
