import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema.js'
import { DJTOrderByWithRelationInputSchema } from '../inputTypeSchemas/DJTOrderByWithRelationInputSchema.js'
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema.js'
export const DJTAggregateArgsSchema: z.ZodType<Prisma.DJTAggregateArgs> = z.object({
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([ DJTOrderByWithRelationInputSchema.array(),DJTOrderByWithRelationInputSchema ]).optional(),
  cursor: DJTWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DJTAggregateArgsSchema;