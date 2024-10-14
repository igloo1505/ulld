import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { NoteTypeUpdateManyMutationInputSchema } from '../inputTypeSchemas/NoteTypeUpdateManyMutationInputSchema.js'
import { NoteTypeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedUpdateManyInputSchema.js'
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema.js'
export const NoteTypeUpdateManyArgsSchema: z.ZodType<Prisma.NoteTypeUpdateManyArgs> = z.object({
  data: z.union([ NoteTypeUpdateManyMutationInputSchema,NoteTypeUncheckedUpdateManyInputSchema ]),
  where: NoteTypeWhereInputSchema.optional(),
}).strict() ;
export default NoteTypeUpdateManyArgsSchema;