import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema'

export const SequentialNoteListDeleteManyArgsSchema: z.ZodType<Prisma.SequentialNoteListDeleteManyArgs> = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
}).strict() ;

export default SequentialNoteListDeleteManyArgsSchema;
