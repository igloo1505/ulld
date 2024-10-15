import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListCreateManyInputSchema } from '../inputTypeSchemas/SequentialNoteListCreateManyInputSchema.js'
export const SequentialNoteListCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SequentialNoteListCreateManyAndReturnArgs> = z.object({
  data: z.union([ SequentialNoteListCreateManyInputSchema,SequentialNoteListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default SequentialNoteListCreateManyAndReturnArgsSchema;