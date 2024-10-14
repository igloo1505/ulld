import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DietWhereInputSchema } from '../inputTypeSchemas/DietWhereInputSchema.js'
import { DietOrderByWithRelationInputSchema } from '../inputTypeSchemas/DietOrderByWithRelationInputSchema.js'
import { DietWhereUniqueInputSchema } from '../inputTypeSchemas/DietWhereUniqueInputSchema.js'
export const DietAggregateArgsSchema: z.ZodType<Prisma.DietAggregateArgs> = z.object({
  where: DietWhereInputSchema.optional(),
  orderBy: z.union([ DietOrderByWithRelationInputSchema.array(),DietOrderByWithRelationInputSchema ]).optional(),
  cursor: DietWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DietAggregateArgsSchema;