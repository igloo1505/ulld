import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListUpdateManyMutationInputSchema } from '../inputTypeSchemas/SequentialNoteListUpdateManyMutationInputSchema.js'
import { SequentialNoteListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SequentialNoteListUncheckedUpdateManyInputSchema.js'
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema.js'
export const SequentialNoteListUpdateManyArgsSchema: z.ZodType<Prisma.SequentialNoteListUpdateManyArgs> = z.object({
  data: z.union([ SequentialNoteListUpdateManyMutationInputSchema,SequentialNoteListUncheckedUpdateManyInputSchema ]),
  where: SequentialNoteListWhereInputSchema.optional(),
}).strict() ;
export default SequentialNoteListUpdateManyArgsSchema;