import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListCreateManyInputSchema } from '../inputTypeSchemas/SequentialNoteListCreateManyInputSchema.js'
export const SequentialNoteListCreateManyArgsSchema: z.ZodType<Prisma.SequentialNoteListCreateManyArgs> = z.object({
  data: z.union([ SequentialNoteListCreateManyInputSchema,SequentialNoteListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default SequentialNoteListCreateManyArgsSchema;