import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/IpynbWhereInputSchema.js
..//inputTypeSchemas/IpynbOrderByWithRelationInputSchema.js
..//inputTypeSchemas/IpynbWhereUniqueInputSchema.js
export const IpynbAggregateArgsSchema: z.ZodType<Prisma.IpynbAggregateArgs> = z.object({
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([ IpynbOrderByWithRelationInputSchema.array(),IpynbOrderByWithRelationInputSchema ]).optional(),
  cursor: IpynbWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default IpynbAggregateArgsSchema;