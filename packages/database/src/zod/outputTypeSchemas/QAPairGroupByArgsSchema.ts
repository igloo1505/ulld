import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema'
import { QAPairOrderByWithAggregationInputSchema } from '../inputTypeSchemas/QAPairOrderByWithAggregationInputSchema'
import { QAPairScalarFieldEnumSchema } from '../inputTypeSchemas/QAPairScalarFieldEnumSchema'
import { QAPairScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/QAPairScalarWhereWithAggregatesInputSchema'

export const QAPairGroupByArgsSchema: z.ZodType<Prisma.QAPairGroupByArgs> = z.object({
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([ QAPairOrderByWithAggregationInputSchema.array(),QAPairOrderByWithAggregationInputSchema ]).optional(),
  by: QAPairScalarFieldEnumSchema.array(),
  having: QAPairScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default QAPairGroupByArgsSchema;
