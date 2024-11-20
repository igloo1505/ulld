import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeUpdateManyMutationInputSchema } from '../inputTypeSchemas/NoteTypeUpdateManyMutationInputSchema'
import { NoteTypeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedUpdateManyInputSchema'
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema'

export const NoteTypeUpdateManyArgsSchema: z.ZodType<Prisma.NoteTypeUpdateManyArgs> = z.object({
  data: z.union([ NoteTypeUpdateManyMutationInputSchema,NoteTypeUncheckedUpdateManyInputSchema ]),
  where: NoteTypeWhereInputSchema.optional(),
}).strict() ;

export default NoteTypeUpdateManyArgsSchema;
