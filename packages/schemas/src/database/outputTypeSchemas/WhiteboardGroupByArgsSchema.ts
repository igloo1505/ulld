import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema'
import { WhiteboardOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WhiteboardOrderByWithAggregationInputSchema'
import { WhiteboardScalarFieldEnumSchema } from '../inputTypeSchemas/WhiteboardScalarFieldEnumSchema'
import { WhiteboardScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WhiteboardScalarWhereWithAggregatesInputSchema'

export const WhiteboardGroupByArgsSchema: z.ZodType<Prisma.WhiteboardGroupByArgs> = z.object({
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([ WhiteboardOrderByWithAggregationInputSchema.array(),WhiteboardOrderByWithAggregationInputSchema ]).optional(),
  by: WhiteboardScalarFieldEnumSchema.array(),
  having: WhiteboardScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WhiteboardGroupByArgsSchema;
