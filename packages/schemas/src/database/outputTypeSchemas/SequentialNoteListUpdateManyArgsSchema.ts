import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SequentialNoteListUpdateManyMutationInputSchema.js
..//inputTypeSchemas/SequentialNoteListUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/SequentialNoteListWhereInputSchema.js
export const SequentialNoteListUpdateManyArgsSchema: z.ZodType<Prisma.SequentialNoteListUpdateManyArgs> = z.object({
  data: z.union([ SequentialNoteListUpdateManyMutationInputSchema,SequentialNoteListUncheckedUpdateManyInputSchema ]),
  where: SequentialNoteListWhereInputSchema.optional(),
}).strict() ;
export default SequentialNoteListUpdateManyArgsSchema;