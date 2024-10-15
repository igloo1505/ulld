import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema.js'
export const NoteTypeDeleteManyArgsSchema: z.ZodType<Prisma.NoteTypeDeleteManyArgs> = z.object({
  where: NoteTypeWhereInputSchema.optional(),
}).strict() ;
export default NoteTypeDeleteManyArgsSchema;