import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WhiteboardWhereInputSchema.js
..//inputTypeSchemas/WhiteboardOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/WhiteboardScalarFieldEnumSchema.js
..//inputTypeSchemas/WhiteboardScalarWhereWithAggregatesInputSchema.js
export const WhiteboardGroupByArgsSchema: z.ZodType<Prisma.WhiteboardGroupByArgs> = z.object({
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([ WhiteboardOrderByWithAggregationInputSchema.array(),WhiteboardOrderByWithAggregationInputSchema ]).optional(),
  by: WhiteboardScalarFieldEnumSchema.array(),
  having: WhiteboardScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default WhiteboardGroupByArgsSchema;