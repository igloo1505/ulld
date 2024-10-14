import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SequentialNoteListCreateManyInputSchema } from '../inputTypeSchemas/SequentialNoteListCreateManyInputSchema'

export const SequentialNoteListCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SequentialNoteListCreateManyAndReturnArgs> = z.object({
  data: z.union([ SequentialNoteListCreateManyInputSchema,SequentialNoteListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SequentialNoteListCreateManyAndReturnArgsSchema;
