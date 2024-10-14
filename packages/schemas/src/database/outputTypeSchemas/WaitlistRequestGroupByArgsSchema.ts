import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema'
import { WaitlistRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WaitlistRequestOrderByWithAggregationInputSchema'
import { WaitlistRequestScalarFieldEnumSchema } from '../inputTypeSchemas/WaitlistRequestScalarFieldEnumSchema'
import { WaitlistRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WaitlistRequestScalarWhereWithAggregatesInputSchema'

export const WaitlistRequestGroupByArgsSchema: z.ZodType<Prisma.WaitlistRequestGroupByArgs> = z.object({
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([ WaitlistRequestOrderByWithAggregationInputSchema.array(),WaitlistRequestOrderByWithAggregationInputSchema ]).optional(),
  by: WaitlistRequestScalarFieldEnumSchema.array(),
  having: WaitlistRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WaitlistRequestGroupByArgsSchema;
