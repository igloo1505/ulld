import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/QAPairWhereInputSchema.js
..//inputTypeSchemas/QAPairOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/QAPairScalarFieldEnumSchema.js
..//inputTypeSchemas/QAPairScalarWhereWithAggregatesInputSchema.js
export const QAPairGroupByArgsSchema: z.ZodType<Prisma.QAPairGroupByArgs> = z.object({
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([ QAPairOrderByWithAggregationInputSchema.array(),QAPairOrderByWithAggregationInputSchema ]).optional(),
  by: QAPairScalarFieldEnumSchema.array(),
  having: QAPairScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default QAPairGroupByArgsSchema;