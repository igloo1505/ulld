import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WhiteboardCreateInputSchema.js
..//inputTypeSchemas/WhiteboardUncheckedCreateInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema: z.ZodType<Prisma.WhiteboardSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const WhiteboardCreateArgsSchema: z.ZodType<Prisma.WhiteboardCreateArgs> = z.object({
  select: WhiteboardSelectSchema.optional(),
  data: z.union([ WhiteboardCreateInputSchema,WhiteboardUncheckedCreateInputSchema ]),
}).strict() ;
export default WhiteboardCreateArgsSchema;