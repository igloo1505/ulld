import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema'
import { DJTOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DJTOrderByWithAggregationInputSchema'
import { DJTScalarFieldEnumSchema } from '../inputTypeSchemas/DJTScalarFieldEnumSchema'
import { DJTScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DJTScalarWhereWithAggregatesInputSchema'

export const DJTGroupByArgsSchema: z.ZodType<Prisma.DJTGroupByArgs> = z.object({
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([ DJTOrderByWithAggregationInputSchema.array(),DJTOrderByWithAggregationInputSchema ]).optional(),
  by: DJTScalarFieldEnumSchema.array(),
  having: DJTScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DJTGroupByArgsSchema;
