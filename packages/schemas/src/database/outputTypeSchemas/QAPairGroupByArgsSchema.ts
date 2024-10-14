import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema.js'
import { QAPairOrderByWithAggregationInputSchema } from '../inputTypeSchemas/QAPairOrderByWithAggregationInputSchema.js'
import { QAPairScalarFieldEnumSchema } from '../inputTypeSchemas/QAPairScalarFieldEnumSchema.js'
import { QAPairScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/QAPairScalarWhereWithAggregatesInputSchema.js'
export const QAPairGroupByArgsSchema: z.ZodType<Prisma.QAPairGroupByArgs> = z.object({
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([ QAPairOrderByWithAggregationInputSchema.array(),QAPairOrderByWithAggregationInputSchema ]).optional(),
  by: QAPairScalarFieldEnumSchema.array(),
  having: QAPairScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default QAPairGroupByArgsSchema;