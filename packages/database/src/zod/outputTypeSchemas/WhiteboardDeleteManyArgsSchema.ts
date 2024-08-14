import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema'

export const WhiteboardDeleteManyArgsSchema: z.ZodType<Prisma.WhiteboardDeleteManyArgs> = z.object({
  where: WhiteboardWhereInputSchema.optional(),
}).strict() ;

export default WhiteboardDeleteManyArgsSchema;
