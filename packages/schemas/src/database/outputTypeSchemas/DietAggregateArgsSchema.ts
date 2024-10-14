import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietWhereInputSchema } from '../inputTypeSchemas/DietWhereInputSchema'
import { DietOrderByWithRelationInputSchema } from '../inputTypeSchemas/DietOrderByWithRelationInputSchema'
import { DietWhereUniqueInputSchema } from '../inputTypeSchemas/DietWhereUniqueInputSchema'

export const DietAggregateArgsSchema: z.ZodType<Prisma.DietAggregateArgs> = z.object({
  where: DietWhereInputSchema.optional(),
  orderBy: z.union([ DietOrderByWithRelationInputSchema.array(),DietOrderByWithRelationInputSchema ]).optional(),
  cursor: DietWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DietAggregateArgsSchema;
