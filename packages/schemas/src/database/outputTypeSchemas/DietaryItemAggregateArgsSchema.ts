import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema.js'
import { DietaryItemOrderByWithRelationInputSchema } from '../inputTypeSchemas/DietaryItemOrderByWithRelationInputSchema.js'
import { DietaryItemWhereUniqueInputSchema } from '../inputTypeSchemas/DietaryItemWhereUniqueInputSchema.js'
export const DietaryItemAggregateArgsSchema: z.ZodType<Prisma.DietaryItemAggregateArgs> = z.object({
  where: DietaryItemWhereInputSchema.optional(),
  orderBy: z.union([ DietaryItemOrderByWithRelationInputSchema.array(),DietaryItemOrderByWithRelationInputSchema ]).optional(),
  cursor: DietaryItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DietaryItemAggregateArgsSchema;