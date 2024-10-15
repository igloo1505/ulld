import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema.js'
import { WhiteboardOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WhiteboardOrderByWithAggregationInputSchema.js'
import { WhiteboardScalarFieldEnumSchema } from '../inputTypeSchemas/WhiteboardScalarFieldEnumSchema.js'
import { WhiteboardScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WhiteboardScalarWhereWithAggregatesInputSchema.js'
export const WhiteboardGroupByArgsSchema: z.ZodType<Prisma.WhiteboardGroupByArgs> = z.object({
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([ WhiteboardOrderByWithAggregationInputSchema.array(),WhiteboardOrderByWithAggregationInputSchema ]).optional(),
  by: WhiteboardScalarFieldEnumSchema.array(),
  having: WhiteboardScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default WhiteboardGroupByArgsSchema;