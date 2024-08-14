import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema'
import { WaitlistRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/WaitlistRequestOrderByWithRelationInputSchema'
import { WaitlistRequestWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema'

export const WaitlistRequestAggregateArgsSchema: z.ZodType<Prisma.WaitlistRequestAggregateArgs> = z.object({
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([ WaitlistRequestOrderByWithRelationInputSchema.array(),WaitlistRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: WaitlistRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WaitlistRequestAggregateArgsSchema;
