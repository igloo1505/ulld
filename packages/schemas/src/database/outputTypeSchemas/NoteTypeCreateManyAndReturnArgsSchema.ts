import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { NoteTypeCreateManyInputSchema } from '../inputTypeSchemas/NoteTypeCreateManyInputSchema.js'
export const NoteTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.NoteTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ NoteTypeCreateManyInputSchema,NoteTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default NoteTypeCreateManyAndReturnArgsSchema;