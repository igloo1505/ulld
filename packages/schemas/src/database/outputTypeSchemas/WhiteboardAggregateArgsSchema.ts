import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WhiteboardWhereInputSchema.js
..//inputTypeSchemas/WhiteboardOrderByWithRelationInputSchema.js
..//inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js
export const WhiteboardAggregateArgsSchema: z.ZodType<Prisma.WhiteboardAggregateArgs> = z.object({
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([ WhiteboardOrderByWithRelationInputSchema.array(),WhiteboardOrderByWithRelationInputSchema ]).optional(),
  cursor: WhiteboardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default WhiteboardAggregateArgsSchema;