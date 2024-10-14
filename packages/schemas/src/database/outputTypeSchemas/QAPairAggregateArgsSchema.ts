import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema'
import { QAPairOrderByWithRelationInputSchema } from '../inputTypeSchemas/QAPairOrderByWithRelationInputSchema'
import { QAPairWhereUniqueInputSchema } from '../inputTypeSchemas/QAPairWhereUniqueInputSchema'

export const QAPairAggregateArgsSchema: z.ZodType<Prisma.QAPairAggregateArgs> = z.object({
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([ QAPairOrderByWithRelationInputSchema.array(),QAPairOrderByWithRelationInputSchema ]).optional(),
  cursor: QAPairWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default QAPairAggregateArgsSchema;
