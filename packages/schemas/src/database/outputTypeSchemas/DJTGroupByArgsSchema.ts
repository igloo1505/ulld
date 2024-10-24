import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema.js'
import { DJTOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DJTOrderByWithAggregationInputSchema.js'
import { DJTScalarFieldEnumSchema } from '../inputTypeSchemas/DJTScalarFieldEnumSchema.js'
import { DJTScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DJTScalarWhereWithAggregatesInputSchema.js'
export const DJTGroupByArgsSchema: z.ZodType<Prisma.DJTGroupByArgs> = z.object({
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([ DJTOrderByWithAggregationInputSchema.array(),DJTOrderByWithAggregationInputSchema ]).optional(),
  by: DJTScalarFieldEnumSchema.array(),
  having: DJTScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DJTGroupByArgsSchema;