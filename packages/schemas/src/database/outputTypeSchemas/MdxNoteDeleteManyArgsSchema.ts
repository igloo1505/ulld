import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema.js'
export const MdxNoteDeleteManyArgsSchema: z.ZodType<Prisma.MdxNoteDeleteManyArgs> = z.object({
  where: MdxNoteWhereInputSchema.optional(),
}).strict() ;
export default MdxNoteDeleteManyArgsSchema;