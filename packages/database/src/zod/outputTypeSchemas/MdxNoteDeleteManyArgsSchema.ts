import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema'

export const MdxNoteDeleteManyArgsSchema: z.ZodType<Prisma.MdxNoteDeleteManyArgs> = z.object({
  where: MdxNoteWhereInputSchema.optional(),
}).strict() ;

export default MdxNoteDeleteManyArgsSchema;
