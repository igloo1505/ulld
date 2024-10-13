import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SequentialNoteListWhereInputSchema.js
export const SequentialNoteListDeleteManyArgsSchema: z.ZodType<Prisma.SequentialNoteListDeleteManyArgs> = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
}).strict() ;
export default SequentialNoteListDeleteManyArgsSchema;