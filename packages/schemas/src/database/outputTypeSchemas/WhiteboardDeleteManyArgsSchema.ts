import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema.js'
export const WhiteboardDeleteManyArgsSchema: z.ZodType<Prisma.WhiteboardDeleteManyArgs> = z.object({
  where: WhiteboardWhereInputSchema.optional(),
}).strict() ;
export default WhiteboardDeleteManyArgsSchema;