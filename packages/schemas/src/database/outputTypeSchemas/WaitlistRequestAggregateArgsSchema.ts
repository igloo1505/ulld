import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema.js'
import { WaitlistRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/WaitlistRequestOrderByWithRelationInputSchema.js'
import { WaitlistRequestWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.js'
export const WaitlistRequestAggregateArgsSchema: z.ZodType<Prisma.WaitlistRequestAggregateArgs> = z.object({
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([ WaitlistRequestOrderByWithRelationInputSchema.array(),WaitlistRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: WaitlistRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default WaitlistRequestAggregateArgsSchema;