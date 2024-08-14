import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SequentialNoteListUpdateManyMutationInputSchema } from '../inputTypeSchemas/SequentialNoteListUpdateManyMutationInputSchema'
import { SequentialNoteListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SequentialNoteListUncheckedUpdateManyInputSchema'
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema'

export const SequentialNoteListUpdateManyArgsSchema: z.ZodType<Prisma.SequentialNoteListUpdateManyArgs> = z.object({
  data: z.union([ SequentialNoteListUpdateManyMutationInputSchema,SequentialNoteListUncheckedUpdateManyInputSchema ]),
  where: SequentialNoteListWhereInputSchema.optional(),
}).strict() ;

export default SequentialNoteListUpdateManyArgsSchema;
