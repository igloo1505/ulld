import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/NoteTypeWhereInputSchema.js
export const NoteTypeDeleteManyArgsSchema: z.ZodType<Prisma.NoteTypeDeleteManyArgs> = z.object({
  where: NoteTypeWhereInputSchema.optional(),
}).strict() ;
export default NoteTypeDeleteManyArgsSchema;