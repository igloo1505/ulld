import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/NoteTypeCreateManyInputSchema.js
export const NoteTypeCreateManyArgsSchema: z.ZodType<Prisma.NoteTypeCreateManyArgs> = z.object({
  data: z.union([ NoteTypeCreateManyInputSchema,NoteTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default NoteTypeCreateManyArgsSchema;