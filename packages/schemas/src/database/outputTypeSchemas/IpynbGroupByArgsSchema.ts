import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/IpynbWhereInputSchema.js
..//inputTypeSchemas/IpynbOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/IpynbScalarFieldEnumSchema.js
..//inputTypeSchemas/IpynbScalarWhereWithAggregatesInputSchema.js
export const IpynbGroupByArgsSchema: z.ZodType<Prisma.IpynbGroupByArgs> = z.object({
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([ IpynbOrderByWithAggregationInputSchema.array(),IpynbOrderByWithAggregationInputSchema ]).optional(),
  by: IpynbScalarFieldEnumSchema.array(),
  having: IpynbScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default IpynbGroupByArgsSchema;