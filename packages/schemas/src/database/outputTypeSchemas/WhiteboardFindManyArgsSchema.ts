import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WhiteboardWhereInputSchema.js
..//inputTypeSchemas/WhiteboardOrderByWithRelationInputSchema.js
..//inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js
..//inputTypeSchemas/WhiteboardScalarFieldEnumSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema: z.ZodType<Prisma.WhiteboardSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const WhiteboardFindManyArgsSchema: z.ZodType<Prisma.WhiteboardFindManyArgs> = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([ WhiteboardOrderByWithRelationInputSchema.array(),WhiteboardOrderByWithRelationInputSchema ]).optional(),
  cursor: WhiteboardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WhiteboardScalarFieldEnumSchema,WhiteboardScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default WhiteboardFindManyArgsSchema;