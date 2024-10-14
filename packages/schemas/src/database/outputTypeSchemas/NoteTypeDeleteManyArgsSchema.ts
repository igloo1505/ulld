import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema'

export const NoteTypeDeleteManyArgsSchema: z.ZodType<Prisma.NoteTypeDeleteManyArgs> = z.object({
  where: NoteTypeWhereInputSchema.optional(),
}).strict() ;

export default NoteTypeDeleteManyArgsSchema;
