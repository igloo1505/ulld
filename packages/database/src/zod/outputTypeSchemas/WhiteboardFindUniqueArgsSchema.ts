import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WhiteboardWhereUniqueInputSchema } from '../inputTypeSchemas/WhiteboardWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WhiteboardSelectSchema: z.ZodType<Prisma.WhiteboardSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export const WhiteboardFindUniqueArgsSchema: z.ZodType<Prisma.WhiteboardFindUniqueArgs> = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereUniqueInputSchema,
}).strict() ;

export default WhiteboardFindUniqueArgsSchema;
