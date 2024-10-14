import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema'
import { WhiteboardCreateInputSchema } from '../inputTypeSchemas/WhiteboardCreateInputSchema'
import { WhiteboardUncheckedCreateInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedCreateInputSchema'
import { WhiteboardUpdateInputSchema } from '../inputTypeSchemas/WhiteboardUpdateInputSchema'
import { WhiteboardUncheckedUpdateInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedUpdateInputSchema'
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
