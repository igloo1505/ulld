import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WaitlistRequestWhereInputSchema.js
..//inputTypeSchemas/WaitlistRequestOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/WaitlistRequestScalarFieldEnumSchema.js
..//inputTypeSchemas/WaitlistRequestScalarWhereWithAggregatesInputSchema.js
export const WaitlistRequestGroupByArgsSchema: z.ZodType<Prisma.WaitlistRequestGroupByArgs> = z.object({
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([ WaitlistRequestOrderByWithAggregationInputSchema.array(),WaitlistRequestOrderByWithAggregationInputSchema ]).optional(),
  by: WaitlistRequestScalarFieldEnumSchema.array(),
  having: WaitlistRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default WaitlistRequestGroupByArgsSchema;