import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema'
import { WhiteboardOrderByWithRelationInputSchema } from '../inputTypeSchemas/WhiteboardOrderByWithRelationInputSchema'
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema'

export const WhiteboardAggregateArgsSchema: z.ZodType<Prisma.WhiteboardAggregateArgs> = z.object({
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([ WhiteboardOrderByWithRelationInputSchema.array(),WhiteboardOrderByWithRelationInputSchema ]).optional(),
  cursor: WhiteboardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WhiteboardAggregateArgsSchema;
