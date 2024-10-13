import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WhiteboardUpdateInputSchema.js
..//inputTypeSchemas/WhiteboardUncheckedUpdateInputSchema.js
..//inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema: z.ZodType<Prisma.WhiteboardSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const WhiteboardUpdateArgsSchema: z.ZodType<Prisma.WhiteboardUpdateArgs> = z.object({
  select: WhiteboardSelectSchema.optional(),
  data: z.union([ WhiteboardUpdateInputSchema,WhiteboardUncheckedUpdateInputSchema ]),
  where: WhiteboardWhereUniqueInputSchema,
}).strict() ;
export default WhiteboardUpdateArgsSchema;