import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema.js'
import { WhiteboardCreateInputSchema } from '../inputTypeSchemas/WhiteboardCreateInputSchema.js'
import { WhiteboardUncheckedCreateInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedCreateInputSchema.js'
import { WhiteboardUpdateInputSchema } from '../inputTypeSchemas/WhiteboardUpdateInputSchema.js'
import { WhiteboardUncheckedUpdateInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedUpdateInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const WhiteboardSelectSchema: z.ZodType<Prisma.WhiteboardSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const WhiteboardUpsertArgsSchema: z.ZodType<Prisma.WhiteboardUpsertArgs> = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereUniqueInputSchema,
  create: z.union([ WhiteboardCreateInputSchema,WhiteboardUncheckedCreateInputSchema ]),
  update: z.union([ WhiteboardUpdateInputSchema,WhiteboardUncheckedUpdateInputSchema ]),
}).strict() ;
export default WhiteboardUpsertArgsSchema;