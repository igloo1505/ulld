import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema'
import { DietaryItemOrderByWithRelationInputSchema } from '../inputTypeSchemas/DietaryItemOrderByWithRelationInputSchema'
import { DietaryItemWhereUniqueInputSchema } from '../inputTypeSchemas/DietaryItemWhereUniqueInputSchema'

export const DietaryItemAggregateArgsSchema: z.ZodType<Prisma.DietaryItemAggregateArgs> = z.object({
  where: DietaryItemWhereInputSchema.optional(),
  orderBy: z.union([ DietaryItemOrderByWithRelationInputSchema.array(),DietaryItemOrderByWithRelationInputSchema ]).optional(),
  cursor: DietaryItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DietaryItemAggregateArgsSchema;
