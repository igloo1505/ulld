import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema'
import { DJTOrderByWithRelationInputSchema } from '../inputTypeSchemas/DJTOrderByWithRelationInputSchema'
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema'

export const DJTAggregateArgsSchema: z.ZodType<Prisma.DJTAggregateArgs> = z.object({
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([ DJTOrderByWithRelationInputSchema.array(),DJTOrderByWithRelationInputSchema ]).optional(),
  cursor: DJTWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DJTAggregateArgsSchema;
