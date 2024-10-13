import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/NoteTypeUpdateManyMutationInputSchema.js
..//inputTypeSchemas/NoteTypeUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/NoteTypeWhereInputSchema.js
export const NoteTypeUpdateManyArgsSchema: z.ZodType<Prisma.NoteTypeUpdateManyArgs> = z.object({
  data: z.union([ NoteTypeUpdateManyMutationInputSchema,NoteTypeUncheckedUpdateManyInputSchema ]),
  where: NoteTypeWhereInputSchema.optional(),
}).strict() ;
export default NoteTypeUpdateManyArgsSchema;